# Desktop reminders on the user's computer

For coding agents only (file and shell access), from step 3 of [reminders.md](reminders.md). A notification is useful only on the computer the user is sitting at, so first check that this is it. Shell only, no Python: Python is missing or a store stub on many machines, while PowerShell (Windows) and `sh` (macOS, Linux) are always there.

## 1. Is this the computer in front of the user?

Decide silently; never ask the user. When in doubt, it isn't: go back to [reminders.md](reminders.md) step 4 (calendar file) and say why in one line.

**Not local** if any of these is true:

| Signal | Means | Checked |
|---|---|---|
| `CLAUDE_CODE_REMOTE=true` | Claude Code cloud session | Claude Code docs (env vars), 2026-11-22 |
| `CODESPACES=true` | GitHub Codespaces | GitHub docs, 2026-11-22 |
| `GITPOD_WORKSPACE_ID` is set | Gitpod / Ona | Ona docs, 2026-11-22 |
| `SSH_CONNECTION` or `SSH_TTY` is set | A remote shell, even to the user's own server | General knowledge |
| `/.dockerenv` or `/run/.containerenv` exists | A container, even on the user's own laptop | General knowledge |
| `CI=true` | A CI runner | General knowledge |

Add a row when a new cloud agent documents its own signal. Many don't (Codex cloud, Cursor cloud agents, Copilot's coding agent, Jules), which is why the next check is needed too.

**Local** only with a positive sign of a desktop session for this user:
- **Windows:** File Explorer runs in this process's session: `(Get-Process explorer -ErrorAction SilentlyContinue).SessionId -contains (Get-Process -Id $PID).SessionId`.
- **macOS:** this user owns the screen: `[ "$(stat -f%Su /dev/console)" = "$(id -un)" ]`.
- **Linux:** `DISPLAY` or `WAYLAND_DISPLAY` is set, `systemctl --user` works, and `notify-send` exists.
- **WSL** (`WSL_DISTRO_NAME` is set): the desktop is Windows. Use the Windows steps through `powershell.exe`, with the files in the Windows home folder.

No positive sign: not local.

## 2. Ask first

This changes the computer's settings. In its own message, naming the computer (`hostname`) and its system:

> I can set a desktop reminder on this computer (<hostname>, <Windows / macOS / Linux>): a small script in ~/Thelyv/reminders/ that runs daily at <time> and shows a notification on review days. OK?
> 1. Yes, set it up (Recommended)
> 2. No, give me a calendar file instead

**2:** go to [reminders.md](reminders.md) step 4.

## 3. The reviews file

`~/Thelyv/reminders/reviews.txt` (on Windows `$HOME\Thelyv\reminders\reviews.txt`), UTF-8, one line per review date:

```
2026-11-23|HTTPS handshake|What does the server send first?
```

Date, title, first quiz question. Replace any `|` inside the title or question with `/`. More reminders later just add lines; the daily job stays the same.

## 4. Set it up

Write the script, register the daily job at the chosen time (24-hour in the commands: 8:30 PM is 20:30), then test (step 5). If the job already exists, only add lines to `reviews.txt`; if the time changed, register it again.

### Windows

`$HOME\Thelyv\reminders\thelyv-reminder.ps1`:

```powershell
# Thelyv: shows a notification for each review due today. Run by the ThelyvQuiz task.
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$file = Join-Path $dir 'reviews.txt'
if (-not (Test-Path $file)) { exit }
$today = Get-Date -Format 'yyyy-MM-dd'
$null = [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
$null = [Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime]
$appId = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
$notifier = [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId)
foreach ($line in (Get-Content -Encoding UTF8 $file)) {
    if (-not $line.StartsWith("$today|")) { continue }
    $parts = $line -split '\|', 3
    $title = "Thelyv quiz: $($parts[1])"
    $body = "$($parts[2]) Paste '$title' into your AI to start."
    if ($notifier.Setting -ne 'Enabled') {
        # Notifications are off for this user or for PowerShell: show a small window instead.
        $null = (New-Object -ComObject WScript.Shell).Popup($body, 0, $title, 64)
        continue
    }
    $t = [Security.SecurityElement]::Escape($title)
    $b = [Security.SecurityElement]::Escape($body)
    $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
    $xml.LoadXml("<toast><visual><binding template='ToastGeneric'><text>$t</text><text>$b</text></binding></visual></toast>")
    $notifier.Show([Windows.UI.Notifications.ToastNotification]::new($xml))
}
```

When Windows notifications are off (Settings → System → Notifications), the script shows a small window instead of a notification. Check before installing: if `CreateToastNotifier($appId).Setting` isn't `Enabled`, tell the user "Windows notifications are off, so reminders will show as a small window. Turn notifications on in Settings → System → Notifications if you'd rather have a notification." Don't change the setting yourself.

It must run in Windows PowerShell (`powershell.exe`), not PowerShell 7. Register the task (no admin needed; `-StartWhenAvailable` runs a check missed while the PC was off):

```powershell
$script = "$HOME\Thelyv\reminders\thelyv-reminder.ps1"
$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$script`""
$trigger = New-ScheduledTaskTrigger -Daily -At (Get-Date -Hour 20 -Minute 30 -Second 0)
Register-ScheduledTask -TaskName 'ThelyvQuiz' -Action $action -Trigger $trigger -Settings (New-ScheduledTaskSettingsSet -StartWhenAvailable) -Force
```

Remove: `Unregister-ScheduledTask -TaskName ThelyvQuiz -Confirm:$false`

### macOS and Linux

`~/Thelyv/reminders/thelyv-reminder.sh` (one script for both):

```sh
#!/bin/sh
# Thelyv: shows a notification for each review due today. Run daily by launchd or a systemd timer.
dir=$(cd "$(dirname "$0")" && pwd)
today=$(date +%Y-%m-%d)
[ -f "$dir/reviews.txt" ] || exit 0
grep "^$today|" "$dir/reviews.txt" | while IFS='|' read -r day title question; do
  t="Thelyv quiz: $title"
  b="$question Paste '$t' into your AI to start."
  if [ "$(uname -s)" = "Darwin" ]; then
    osascript -e 'on run argv' -e 'display notification (item 2 of argv) with title (item 1 of argv)' -e 'end run' "$t" "$b"
  else
    notify-send "$t" "$b"
  fi
done
```

Not cron: a cron job runs outside the desktop session, so its notifications never show. Use the system's own per-user scheduler.

**macOS:** write `~/Library/LaunchAgents/com.thelyv.quiz.plist`, with the user's real home path:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.thelyv.quiz</string>
  <key>ProgramArguments</key>
  <array><string>/bin/sh</string><string>/Users/NAME/Thelyv/reminders/thelyv-reminder.sh</string></array>
  <key>StartCalendarInterval</key>
  <dict><key>Hour</key><integer>20</integer><key>Minute</key><integer>30</integer></dict>
</dict>
</plist>
```

Load: `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.thelyv.quiz.plist`. A run missed while the Mac slept happens on wake. The first notification may ask the user to allow notifications from Script Editor.

Remove: `launchctl bootout gui/$(id -u)/com.thelyv.quiz; rm ~/Library/LaunchAgents/com.thelyv.quiz.plist`

**Linux:** write `~/.config/systemd/user/thelyv-quiz.service`:

```ini
[Unit]
Description=Thelyv quiz reminder

[Service]
Type=oneshot
ExecStart=/bin/sh %h/Thelyv/reminders/thelyv-reminder.sh
```

and `~/.config/systemd/user/thelyv-quiz.timer` (`Persistent=true` runs a missed check at the next start):

```ini
[Unit]
Description=Daily Thelyv quiz check

[Timer]
OnCalendar=*-*-* 20:30:00
Persistent=true

[Install]
WantedBy=timers.target
```

Start: `systemctl --user daemon-reload && systemctl --user enable --now thelyv-quiz.timer`

Remove: `systemctl --user disable --now thelyv-quiz.timer; rm ~/.config/systemd/user/thelyv-quiz.service ~/.config/systemd/user/thelyv-quiz.timer`

## 5. Test it, then tell the user

1. Add a line for today, `<today>|Test|If you can see this, Thelyv reminders work.`, run the script once, then delete that line.
2. Ask: "Did a notification (or a small Thelyv window) just appear? 1. Yes 2. No". On **No**, remove the job (command above) and fall back to a calendar file ([reminders.md](reminders.md) step 4).
3. On **Yes**, tell the user the times, where the files are, and the one remove command for their system. Record the reminder as `local: <hostname>` ([reminders.md](reminders.md) step 5).

## Cancel

Delete that note's or area's lines from `reviews.txt`. When no future dates are left, run the remove command for the system as well.
