---
name: thelyv-find
description: Thelyv find. Searches the user's saved Thelyv notes in Notion, Google Drive or a local Thelyv folder, shows the matches, and can quiz the user on one. Use when the user invokes the thelyv-find skill (/thelyv-find, /thelyv:thelyv-find in the Claude plugin, or $thelyv-find in Codex), picks "Find something you learned" from the /thelyv menu, or asks where they learned something before.
---

# Thelyv find

**Choices.** Number every option, best first with "(Recommended)", and accept a bare number as the answer.

1. **Destination.** Look for the user's settings with whatever you have: on the user's own computer (coding agents), `~/Thelyv/thelyv-settings.md`; with Notion tools, a page titled `thelyv-settings`; with Google Drive tools, a file `thelyv-settings.md`. It names the destination: `notion`, `drive`, both, or `local` (plus a `folder:` line if not `~/Thelyv`).

   **Nothing to search** (no settings found, or the destination's tools are missing here), say which, then offer only what fits:

   > 1. Connect Notion (Recommended)
   > 2. Connect Google Drive
   > 3. Search my downloaded .md files
   > 4. Start learning instead

   - **1 or 2:** tell the user to say "connect Notion to Thelyv" (or Drive), which the Thelyv save skill (`thelyv-save`) handles. If that skill isn't loaded, tell them: in their app's settings, add Notion's connector or remote MCP server `https://mcp.notion.com/mcp` and sign in, then open a new chat.
   - **3:** with local files, ask for the folder they keep them in and search it. In a chat app, ask them to attach the files.
   - **4:** hand over to the Thelyv goal skill.

2. **Search** with the user's words:
   - **Notion:** search the `Thelyv` database. Match on title, goal, topic and takeaway first, then page content.
   - **Google Drive:** search the `Thelyv` folder by file name and file content.
   - **Local folder:** search the `.md` files' names, front matter and text.
   - **More than one:** search Notion first, then Drive, then local. Show a note only once: notes with the same `thelyv_id` are the same note; keep the first found.

   If nothing matches, try once more with broader or related words (e.g. "cert" → "certificate", "TLS") before reporting no results.
3. **Show** up to 5 matches, best first, numbered. One line each: **title** · saved date · goal · takeaway · link or file path.
4. **Offer**, for the note the user picks:

   > 1. Quiz me on it (Recommended)
   > 2. Open the note
   > 3. Continue learning from it

   - **Quiz:** ask the note's recall questions one at a time. Wait for each answer before showing the note's answer, then say briefly what they got right and what they missed. If the note has no recall questions, write 3 from its Answer section.
   - **Open:** show the note's Answer section and its link or path.
   - **Continue:** hand over to the Thelyv goal skill, starting a new session whose `parent_id` is that note's `thelyv_id`.

Done when the matches, a clear "no notes match", or the connect options are shown.
