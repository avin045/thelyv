# Quiz reminders

Reviews spaced on the **Ebbinghaus forgetting curve**: each review comes just before the user would forget, and the gaps grow as memory gets stronger. Each quiz ends with a **Feynman** "explain it simply" question (the find skill runs the quiz).

Use 12-hour times with AM/PM everywhere the user sees a time.

## 1. Offer

After a save, in its own message:

> Want Thelyv to quiz you on this later? Spaced on the forgetting curve, so each review comes just before you'd forget.
> 1. Yes: tomorrow, in 3 days, in a week, in 3 weeks (Recommended)
> 2. Just once, tomorrow
> 3. No thanks

- **3:** add 1 to `reminder_offers_declined` in thelyv-settings. At 2, stop offering after saves until the user asks ("remind me to revise this").
- **1 or 2:** set `reminder_offers_declined: 0`, then ask the time.

The same flow runs when the user asks for reminders on a note or a whole area.

## 2. Ask the time

At most 3 options, in its own message:

> What time suits you?
> 1. 8:30 PM, about when you learned this (Recommended)
> 2. 9:00 AM
> 3. Another time

- **Option 1:** the user's saved `quiz_time` if there is one; otherwise the local time this session started (`started_at`), rounded to the nearest half hour. People review best around the time they usually study.
- **Option 2:** the opposite part of the day: morning (9:00 AM) if option 1 is afternoon or evening, evening (8:00 PM) if it's morning.
- **3:** ask "What time? For example, 7:30 PM."
- **Time zone:** use the user's local time if this app tells you; otherwise ask once ("Which city or time zone are you in?") and save `timezone:` in thelyv-settings.
- Save the chosen time as `quiz_time:`, so it's option 1 next time.

## 3. Work out the dates

From today, at the chosen time, local:
- **Spaced:** day 1, day 3, day 7, day 21.
- **Once:** day 1.

The find skill adapts the rest after each quiz (see **Rescheduling**).

## 4. Create the reminders

Use the first way that works here, and tell the user which one you used.

1. **The app's own scheduler**, when you have a tool for scheduled tasks or actions (ChatGPT Scheduled Tasks, Gemini scheduled actions, Claude scheduled tasks or similar) **and its runs notify the user** (a push notification, an email, a phone alert). A scheduler whose runs only open a new session that nobody is told about, such as a cloud coding agent's scheduled runs, doesn't count: skip it. Create one task per date. Its prompt carries everything the quiz needs, so it works even if notes can't be reached at that moment:

   ```
   Thelyv quiz: <note title or area> (<thelyv_id>)
   Quiz the user with the Thelyv find skill's quiz if it's available. Otherwise: ask these one at a time, wait for each answer, then say briefly what was right or missing. Don't show an answer before the user replies.
   1. <recall question>  Answer: <answer>
   2. <recall question>  Answer: <answer>
   3. <recall question>  Answer: <answer>
   Last: "Explain <main idea> simply, as if to someone who has never heard of it." Point out any gap.
   Afterwards, mark the result (good or missed) so the next review can be moved.
   ```

   Put still-fuzzy items and mistakes fixed first.
2. **A calendar connector** (Google Calendar, Outlook…): one 10-minute event per date, titled `Thelyv quiz: <title>`, with an alert at the start. The description holds the first question, then the start message (below).
3. **A desktop reminder on this computer**, only for a coding agent (file and shell access) running on the computer in front of the user. Follow [local-reminders.md](local-reminders.md): it checks silently whether this is that computer, asks before installing anything, and sets a small shell script to run daily. Never in a cloud or remote session: a notification there reaches nobody.
4. **A calendar file**, for everything else: a cloud or remote coding agent, a computer that isn't clearly local, or the user said no to step 3. If you can create files, write one `.ics` file with one event per date (same title, description and alert) and offer it: "Open this file to add the reviews to your calendar, on your phone or computer." Build it with code when you can, with the time zone set correctly. When step 3 was skipped, say why in one line, e.g. "This looks like a cloud session, so a reminder on this machine wouldn't reach you. Here's a calendar file instead."
5. **Nothing works:** list the dates and times, with the start message, and suggest setting them in the phone's own reminders.

**The start message**, used wherever the reminder can't run the quiz itself:

```
Thelyv quiz: <note title or area>
```

Pasted into any chat with Thelyv, it starts the find skill's quiz. Where `new-chat-links.md` in the Thelyv goal skill has a link for this app, add it, within that table's length limit.

## 5. Record them

Add to the `## Reminders` list in thelyv-settings, one line per note or area:

```
- <title or area> | <thelyv_id or area> | 2026-11-23 9:00 AM, 2026-11-25 9:00 AM, 2026-11-29 9:00 AM, 2026-12-13 9:00 AM | <app scheduler / calendar / ics / local: <computer name>>
```

For a desktop reminder, record the computer's name (`hostname`): the reminders live only on that computer.

Without a settings note (downloads only), show the list to the user instead.

Confirm in one line: "Quizzes set: tomorrow, Nov 25, Nov 29 and Dec 13 at 9:00 AM, in <where>."

## Show and cancel

- **"Show my reminders":** list the `## Reminders` lines, next date first.
- **"Cancel the <area or note> quizzes":** remove them where they live (delete the scheduled tasks or calendar events, or remove the lines from `reviews.txt` as [local-reminders.md](local-reminders.md) says), then remove the line from settings. For a `.ics` file, tell the user to delete those events in their calendar. If the line says `local: <name>` and this isn't that computer (or this is a cloud session), say "These reminders live on <name>; cancel them from a Thelyv chat there." Confirm what was cancelled.

## Rescheduling

The find skill hands over here after a quiz, with the result.

- **Good** (most answers right, and the simple explanation had no big gap): keep the remaining dates. After the last date, offer one more review in 2 months.
- **Missed:** move the next review to tomorrow, then continue the remaining gaps from there (3 days, 7 days…). Mark the missed ideas "Still fuzzy" in the note and the area's master note.
- Update the reminders where they live and the `## Reminders` line. Desktop reminders can only be changed on their own computer; anywhere else, tell the user the new dates to change there.
