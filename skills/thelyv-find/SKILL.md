---
name: thelyv-find
description: Thelyv find. Searches the user's saved Thelyv notes in Notion, Google Drive or a local Thelyv folder, shows what they've learned by area (umbrella master notes), and quizzes them on a note or a whole area with recall questions and a Feynman "explain it simply" question. Use when the user invokes the thelyv-find skill (/thelyv-find, /thelyv:thelyv-find in the Claude plugin, or $thelyv-find in Codex), picks "Find something you learned" or "See what you've learned by area" from the /thelyv menu, asks where they learned something before, says "quiz me on" followed by a topic or area, or sends a message starting "Thelyv quiz:".
---

# Thelyv find

**Choices.** If you have a tool that shows the user a multiple-choice question (for example AskUserQuestion in Claude, request_user_input in Codex, ask_user in Gemini CLI, AskQuestion in Cursor), offer every choice through it: a short label and a one-line description per option, the best option first with "(Recommended)" in its label. Don't add a "something else" option if the tool already lets the user type their own answer. These tools take 2–4 options, so a choice with more (such as a list of notes or areas) goes in a numbered list. Without such a tool, or if it fails, number every option, best first with "(Recommended)", and accept a bare number as the answer. Ask one question per message.

## 1. Find the notes

Look for the user's settings with whatever you have: on the user's own computer (coding agents), `~/Thelyv/thelyv-settings.md`; with Notion tools, a page titled `thelyv-settings`; with Google Drive tools, a file `thelyv-settings.md`. It names the destination: `notion`, `drive`, both, or `local` (plus a `folder:` line if not `~/Thelyv`).

**Nothing to search** (no settings found, or the destination's tools are missing here), say which, then offer only what fits:

> 1. Connect Notion (Recommended)
> 2. Connect Google Drive
> 3. Search my downloaded .md files
> 4. Start learning instead

- **1 or 2:** tell the user to say "connect Notion to Thelyv" (or Drive), which the Thelyv save skill (`thelyv-save`) handles. If that skill isn't loaded, tell them: in their app's settings, add Notion's connector or remote MCP server `https://mcp.notion.com/mcp` and sign in, then open a new chat.
- **3:** with local files, ask for the folder they keep them in and search it. In a chat app, ask them to attach the files.
- **4:** hand over to the Thelyv goal skill.

## 2. Pick the path

- **"Thelyv quiz: <title or area>"** (from a reminder): go straight to **Quiz** for that note or area.
- **"Quiz me on <area>"**, or the user names an area: go to **Open an area**.
- **"See what I've learned by area"** (menu option 5): list the areas, numbered, each with its note count and last date ("1. Data engineering · 4 notes · last Nov 15"). The user picks one: **Open an area**.
- **Anything else:** **Search**.

## Search

Search with the user's words:
- **Notion:** search the `Thelyv` database. Match on title, goal, topic, umbrella and takeaway first, then page content.
- **Google Drive:** search the `Thelyv` folder and its area folders by file name and file content.
- **Local folder:** search the `.md` files' names, front matter and text, including area folders.
- **More than one:** search Notion first, then Drive, then local. Show a note only once: notes with the same `thelyv_id` are the same note; keep the first found.

If nothing matches, try once more with broader or related words (e.g. "cert" → "certificate", "TLS") before reporting no results.

**Show** up to 5 matches, best first, numbered. One line each: **title** · area · saved date · takeaway · link or file path.

For the note the user picks:

> 1. Quiz me on it (Recommended)
> 2. Open the note
> 3. Continue learning from it

- **Open:** show the note's Answer section and its link or path.
- **Continue:** hand over to the Thelyv goal skill, starting a new session whose `parent_id` is that note's `thelyv_id`.

## Open an area

Show the area's master note (`_<area-slug>.md` in the area folder, or the Notion page `<Area> (Thelyv master)`). If it's missing, build the same view from the notes whose `umbrella` is that area, and tell the user saving into the area will rebuild the master. Then offer:

> 1. Quiz me on this area (Recommended)
> 2. Open a note
> 3. Export this area as PDF

- **3:** hand over to the Thelyv save skill ("export <area> as PDF").

## Quiz

Works for one note (its 3 recall questions) or a whole area (up to 5 questions, one per note, newest notes last).

1. **Order:** still-fuzzy ideas first, then mistakes fixed, then the other recall questions.
2. **Ask one at a time.** Wait for the answer before showing the note's answer. Then say briefly what was right and what was missing, in plain words.
3. **Last, the Feynman question:** "Explain <main idea> simply, as if to someone who has never heard of it." Point out any gap or wrong idea in the explanation, kindly.
4. **Score:** **good** when most answers were right and the explanation had no big gap; otherwise **missed**, noting which ideas were missed.
5. **Record:** hand over to the Thelyv save skill with the result, so it updates "Still fuzzy" in the note and master and reschedules any reminders (its reminders guide, "Rescheduling"). If that skill isn't loaded, tell the user which ideas to revisit.
6. **Close** in one line: "3 of 4 right. Star schema is still fuzzy; next review tomorrow." No reminders yet? Offer them once: hand over to the save skill ("remind me to revise this").

Done when the matches, an area, a finished quiz, a clear "no notes match", or the connect options are shown.
