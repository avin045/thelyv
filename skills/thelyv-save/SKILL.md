---
name: thelyv-save
description: Thelyv save. Saves what was learned in this chat as a Thelyv note in the user's Notion, Google Drive, a local Thelyv folder, or a downloadable .md file, files it under an area (umbrella) with a master note, can export an area as PDF, and offers spaced quiz reminders. Also helps connect Notion or Drive. Use when the user says "save this to Thelyv", "save", or "wrap up" in a Thelyv session, invokes the thelyv-save skill (/thelyv-save, /thelyv:thelyv-save in the Claude plugin, or $thelyv-save in Codex), asks to connect Notion or Drive for Thelyv, asks to export a Thelyv area as PDF, asks to set, show or cancel Thelyv quiz reminders ("remind me to revise this"), or when another Thelyv skill hands over a save. Works in any chat or coding agent, not only Thelyv sessions.
---

# Thelyv save

Save only when the user asks. Nothing is saved automatically.

**Choices.** Every choice you offer is a numbered list, one distinct option per number, with combined options listed on their own ("3. Both"). Put the recommended option first and add "(Recommended)". Accept a bare number, or several numbers like "1, 3", as the answer. Ask one question per message.

**What you can do here.** Check once, before step 1:
- **Notion tools:** you can search and create Notion pages.
- **Drive tools:** you can search and create Google Drive files.
- **Local files:** you can read and write files on the user's own computer (coding agents such as Claude Code, Codex, OpenCode, Cursor or Grok Build). A sandbox that only produces downloads doesn't count.

## 1. Find the destination

Look for the user's Thelyv settings, in this order, using whatever you have:

1. **Local files:** `~/Thelyv/thelyv-settings.md`.
2. **Notion:** a page titled `thelyv-settings`.
3. **Google Drive:** a file named `thelyv-settings.md`.

If a settings note is found and you have the tools for the destination it names, use it and go to step 2. If you lack those tools, tell the user which one is missing and follow [connect.md](connect.md), or offer to save locally or as a `.md` file this time.

If none is found, this is the first save. Ask, listing every option this chat supports:

> Where should Thelyv keep your notes?
> 1. Notion (Recommended)
> 2. Google Drive
> 3. Both Notion and Google Drive
> 4. A Thelyv folder on this computer
> 5. A .md file you download each time
> 6. Connect Notion or Google Drive first

- List 1–3 only for the tools this chat has (3 only when it has both), 4 only with local files, and 5 only without local files.
- Recommend Notion when it's available, because the find skill (`thelyv-find`) searches it best; otherwise the local folder; otherwise Google Drive.
- **List 6 whenever Notion or Drive is missing.** When neither is available, put it first and recommend it, unless the local folder is available.
- On 6, follow [connect.md](connect.md). Save the note as a file or show it to copy now, so nothing is lost while they connect.

Then set it up:

- **Notion:** create a database titled `Thelyv` with one property per field in [note-format.md](note-format.md):
  - `title` is the title property.
  - `type`, `mode`, `topic`, `umbrella` and `provider` are selects.
  - `started_at` and `saved_at` are dates.
  - `deep_dive` is a checkbox, `chat_url` a URL, `schema_version` a number.
  - `drift_points` is text, one phrase per line.
  - The rest are text.

  Then create a page `thelyv-settings` beside it containing `destination: notion` and the database's URL.
- **Google Drive:** create a folder `Thelyv`, and inside it `thelyv-settings.md` containing `destination: drive`.
- **Both:** do both setups. Each settings note says `destination: notion, drive`.
- **Local folder:** create `~/Thelyv/` in the user's home folder (not inside the project you're working in) and `~/Thelyv/thelyv-settings.md` containing `destination: local`. If the user names another folder, use it and record `folder: <path>` in a `~/Thelyv/thelyv-settings.md` pointer, so it's found next time.
- **Download:** nothing to set up. There is nowhere to store the choice, so ask again on the next first save in a new chat.

Done when the destination is known and, except for downloads, the settings note exists.

The settings note may also hold other lines; keep them all when you edit it:
- `new_chat_link: <app>, <surface>, <link format>`, written by the Thelyv goal skill.
- `area_format: <Area> = md` or `pdf` (step 7).
- `quiz_time:`, `timezone:`, `reminder_offers_declined:` and a `## Reminders` list ([reminders.md](reminders.md)).

## 2. Ask for the takeaway

In its own message, ask: "In one line, in your own words: what's your takeaway? (Skip is fine.)" Wait for the reply. The user's own line is what they'll remember.

## 3. Work out what the user understood

The note keeps what the user understood, not the struggle to get there. Check each key idea of the session in three layers, stopping at the first that gives a clear answer:

1. **Their own words.** The user said something like "got it", "understood", "makes sense", "ohh, so that's why", "clear now", in any language. Keep their exact phrase for the note's "Understood:" line.
2. **Their behaviour.** They stopped asking about the idea and moved on; asked a follow-up that builds on it ("so then how do I load a dimension?"); explained it back correctly; or answered a recall check correctly.
3. **No signal.** Neither of the above. Don't guess.

The explanation right before a signal is the one that worked: it becomes the Answer. Repeated questions, "I don't get it" exchanges and explanations that didn't land are left out. Wrong ideas the user held and then corrected become "Mistakes fixed": "I thought X → actually Y", at most 3.

If any key idea has no signal, ask once, in its own message, one option per unclear idea:

> I'm not sure these landed. Which do you feel solid on?
> 1. All of them (Recommended)
> 2. <idea>: still fuzzy
> 3. <idea>: still fuzzy

Ideas marked fuzzy go to the note's "Still fuzzy" section, never into the Answer as understood.

## 4. Pick the area

Find the user's existing areas: the `umbrella` values in their notes (Notion property, or the folder names under `Thelyv/`). Suggest the one this note fits best:

> Which area does this belong to?
> 1. Data engineering (Recommended)
> 2. A new area: <suggested name>
> 3. No area

- For a branch, option 1 is the parent note's area, unless the tangent clearly fits another area better; then list both, the better fit first.
- With no existing areas, option 1 is a new area named by you, in plain words ("Data engineering", "Android internals").
- One area per note. No nesting.

## 5. Build the note

Build the fields and body from what happened in this chat, exactly as in [note-format.md](note-format.md), including its writing style.

- **ID.** Use the session's Thelyv ID. Outside a Thelyv session, make one: get the current UTC date and time (run code if you can, otherwise use the date and time in your context) and build `T-YYYYMMDD-HHMM-<topic word>`; if you know only the date, put 4 random digits in place of `HHMM`. Read the goal from the chat and set `type: session`.
- **`saved_at`** comes from the clock the same way.
- **`umbrella`** is the area from step 4 (empty for "No area").
- **Answer** must stand on its own: someone reading only the note, a month later, gets the full answer.
- **Recall questions:** 3 short questions on the key ideas, each with a one-line answer. At least one tests a mistake fixed or a still-fuzzy idea, when there are any.

## 6. Write it

The area folder is `<area-slug>`: the area in lowercase with hyphens, e.g. `data-engineering`. With no area, write to the Thelyv folder itself.

- **Notion:** create a page in the `Thelyv` database. Set the properties from the fields, and put the body in the page content.
- **Google Drive:** create `<title>.md` in `Thelyv/<area-slug>/` (create the folder if needed). Start the file with the fields as YAML front matter between `---` lines, then the body. If a file with that name exists, add ` (2)`, ` (3)` to the name.
- **Both:** write to Notion, then to Drive, with the same content.
- **Local folder:** write `<title>.md` into `<Thelyv folder>/<area-slug>/`, same front matter and body, same name-clash rule as Drive.
- **Download:** create `<title>.md` with the same front matter and body, and offer it as a download. If this app can't create files, show the whole note in one code block and tell the user to save it as `<title>.md`.

Never move or edit notes saved earlier.

## 7. Update the area

If the note has an area and the destination isn't a download, follow [areas.md](areas.md): rebuild the area's master note, and the area's PDF if it has one. The first time an area's master note is created, offer the PDF there.

## 8. Confirm

Reply in one line: `Saved: <title> (in <area>)`, plus the link or file path for each note, or the download. Add one line for the master note ("Updated the Data engineering master: 3 notes") and the PDF if one was made. If a save failed, say what failed and show the full note in a code block, so nothing is lost. If it failed because a connection is missing or expired, offer [connect.md](connect.md).

## 9. Offer quiz reminders

After the confirmation, follow [reminders.md](reminders.md) to offer spaced quiz reminders for this note. Skip it when the user has turned the offer down twice in a row (`reminder_offers_declined: 2` in settings), unless they ask.

## Other requests

- **"Export <area> as PDF":** follow [areas.md](areas.md), "PDF".
- **"Remind me to revise this", "show my reminders", "cancel the <area> quizzes":** follow [reminders.md](reminders.md).
