# Thelyv — project context

Thelyv (from Tamil தெளிவு, *theḷivu* = clarity) is a learning guide for self-learners who learn inside AI chats. It keeps a session on its goal while you learn, and lets you find what you learned a month later.

**Tagline:** Know what you learned, not just what you saved.

Decisions below were settled in a grilling session on 2026-11-21. Treat them as settled; reopen one only by saying so explicitly.

## Problem
- What people actually said: they learn something, and a month later they can't find the chat it was in by scrolling.
- What they do today: save summaries as PDFs, send them to themselves on WhatsApp, or ask for a summary and leave it in the chat.
- Learning is spread across YouTube, articles, docs, Claude and ChatGPT, with no trail of how one source led to the next.
- Nothing warns you when you've drifted too deep into a subtopic.

## Who and why
- **First users:** tech learners who learn in AI chats, in whichever tool they use.
- **Tool-neutral (decided 2026-11-21, replacing "Claude first"):** the skill must work in any AI tool that loads skills. Write it in terms of capabilities ("if you can run code", "if Notion tools are available"), never one vendor's features. Tool-specific extras, like a new-chat link, live in a lookup table the skill checks.
- **Goal:** a personal tool, free, until about 20 people use it weekly. Decide on pricing after that.
- **The v1 bet:** learners start sessions with `/thelyv` and accept at least half of the branch suggestions. If they ignore or resent the nudges, fall back to the plain tracker idea.
- **Positioning:** your learning, kept outside any one AI.
  - Works across AI tools, YouTube and articles.
  - Notes live in your own Notion or Drive.
  - Notes hold the answer itself, not a chat transcript.
  - Branches show how you got there.
  - This is the answer to "my AI already has chat search".

## v1 shape: five skills, no server
- **Delivery:** five portable skills under `skills/`, packaged for Claude as the `thelyv` plugin (never `thelyv-plugin`) from this repo (`github.com/avin045/thelyv`), which is also the plugin's marketplace.
  - `thelyv`: a menu (`/thelyv`). With a topic it skips the menu and starts `thelyv-goal`.
  - `thelyv-goal`: the learning session (`/thelyv:thelyv-goal`).
  - `thelyv-interview-mode`: interview prep (`/thelyv:thelyv-interview-mode`).
  - `thelyv-find`: find and quiz past notes (`/thelyv:thelyv-find`).
  - `thelyv-save`: save a note (`/thelyv:thelyv-save`, or "save this to Thelyv" in any chat).
  - **Names carry the `thelyv-` prefix (decided 2026-11-21, replacing short names):** installed as plain skills in other agents, bare names like `find` or `save` would clash with other skills, or overwrite their folders. The cost is the longer `/thelyv:thelyv-find` inside the Claude plugin. Each description also starts with "Thelyv".
  - Other tools that load `SKILL.md` folders use the same folders as they are.
  - Move the repo to an org once there are users; GitHub redirects the old address.
- **Shared files (decided 2026-11-21):** other tools can't reliably read another skill's folder. `thelyv-save` owns `note-format.md` and the settings note; the others hand over to it by name and show the note to copy if it isn't loaded. The short "how people learn" rules are copied into `thelyv-goal` and `thelyv-interview-mode` on purpose.
- **No Thelyv server, no app and no sign-in in v1.** Notes are written through whatever Notion or Google Drive tools the user's AI has.
- **Missing capabilities:**
  - **Can't create files:** the note is shown to copy.
  - **No clock in the context:** the ID uses random digits instead of the time.
  - **No web search:** answers say so.
  - **No Notion or Drive connected:** save and find offer to walk the user through connecting (Notion recommended; Drive outside Claude needs a Google Cloud project, so it's not pushed). The note is saved as a file or shown to copy first, so nothing is lost.
  - Tool setup notes (e.g. Claude needs code execution on for skills) belong in the README, because a skill can't run if its tool can't load it.

## Any agent or harness (decided 2026-11-21)
- **The app is not the model.** A Claude model also runs in Claude Code, Cursor, OpenCode and others. Skills check the app from their instructions and their tools, never from the model's name, before giving app-specific links or steps.
- **Coding agents** (file and shell access on the user's computer): no new-chat links; branches and quick looks say "start a new session and paste this". Notes can go to a local `~/Thelyv/` folder (never inside the project being worked on), which `thelyv-find` searches and where `thelyv-settings.md` lives.
- **Packaging per agent (decided 2026-11-21):** one `skills/` folder, plus a small manifest per ecosystem, all pointing at it. Never copy skill text per agent.
  - `.claude-plugin/plugin.json` + `marketplace.json`: Claude apps and Claude Code. Codex's desktop app also reads this marketplace file.
  - `plugin.json` at the root (open Agent Plugins spec, agent-plugins.org): Codex, Cursor, Antigravity CLI and Copilot CLI. Skills are found in `skills/` without listing them.
  - `.codex-plugin/plugin.json` + `.agents/plugins/marketplace.json`: Codex's plugin format and marketplace.
  - `gemini-extension.json`: Gemini CLI extension (replaced by Antigravity CLI on 2026-06-18, still in use). It sets no context file, so these project notes never load into users' sessions.
  - `.grok-plugin/plugin.json` + `marketplace.json` (added 2026-11-22, same layout as last30days): Grok Build installs with `grok plugin install avin045/thelyv`. Per xAI's docs, Grok Build also reads Claude Code plugins and marketplaces, loads skills from `~/.grok/skills/`, `~/.agents/skills/` and plugin `skills/` folders, and shows them as `/<skill-name>`. The Grok app has official Notion and Google Drive connectors at grok.com/connectors (Drive can create files); whether it loads skills is unknown. `grok.com/?q=` is in `new-chat-links.md` as user-reported; Grok's private chat is the quick-look target. A listing in xAI's official catalog is a later PR to `xai-org/plugin-marketplace`, pinned to a full commit SHA.
  - OpenCode has no plugin format for skills: users copy the folders or use `npx skills add avin045/thelyv`, which installs into any agent's skills folder.
  - Keep `version` the same in every manifest.
- **Plain-skill commands** are the skill names (`/thelyv-goal`, `$thelyv-goal` in Codex); the prefix keeps them from clashing with other installed skills.

## Repo layout
- `AGENTS.md`: these project notes, read by most coding agents. `CLAUDE.md` only imports it (`@AGENTS.md`); edit `AGENTS.md`.
- Manifests: `.claude-plugin/`, `plugin.json`, `.codex-plugin/`, `.grok-plugin/`, `.agents/plugins/marketplace.json`, `gemini-extension.json` (see "Packaging per agent").
- `skills/thelyv/SKILL.md`: the menu.
- `skills/thelyv-goal/`: `SKILL.md` (start, mode, teach, drift, branch, quick look, new-chat links), `resources.md` (2 videos and 2 articles), `new-chat-links.md`.
- `skills/thelyv-interview-mode/SKILL.md` and `skills/thelyv-find/SKILL.md`.
- `skills/thelyv-save/`: `SKILL.md`, `note-format.md` (notes and master notes), `areas.md` (master notes, PDF, replacing files), `reminders.md` (forgetting-curve quiz reminders), `local-reminders.md` (desktop reminders for coding agents on the user's own computer, with the scripts), and `connect.md` (connecting Notion or Drive, per app).
- `new-chat-links.md`: links that open a new chat with a message typed in. Rows may come from the app's docs or a hand test; the Checked column says which.
- Check changes with `claude plugin validate .` (it checks only the Claude manifests).

## Rules for every Thelyv skill (dogfooding round 1, 2026-11-21)
- **Choices (question tool first, decided 2026-11-22):** if the app has a tool that shows a multiple-choice question card (AskUserQuestion in Claude, request_user_input in Codex, ask_user in Gemini CLI, AskQuestion in Cursor), every choice goes through it. The AI writes each question itself; nothing is hardcoded. The app never turns a plain-text list into a card, so each skill must say to use the tool. These tools take 2–4 options, so the 5-option `/thelyv` menu stays a numbered list, as do the "Next on your goal path" steps inside each answer.
  - **Fallback (ChatGPT and Grok chat apps, any app without the tool, or the tool fails):** a numbered list; the user can answer with a bare number or several ("2, 1"). Each option is distinct, and combinations get their own number ("3. Both"). One question per message.
  - The rule is copied into each skill's "Choices" line on purpose (see "Shared files"); keep the five in step.
- **Recommended:** the best option goes first, tagged "(Recommended)": the path that reaches the goal most directly. In user-driven mode, only setup choices get the tag.
- **Acronyms:** only real acronyms; never shorten long words into new ones. In diagrams use the short form, list the expansions right below, and keep it to 4 or fewer per diagram (split or simplify otherwise).
- **How people learn:** at most about 4 new ideas per answer; example before rule; an optional recall check now and then (goal-driven only); link new ideas to what the user knows (goal-driven only); every note ends with 3 recall questions; when someone struggles, simplify rather than add.

## How a goal session works
1. **Start:** ask the goal (what, and what for), then the mode:
   - **Goal-driven (default, Recommended):** each teaching answer ends with "Next on your goal path", 2–3 numbered steps, best first. The AI keeps its own answers on the goal and steers back when the talk slides into related-but-unneeded subtopics.
   - **User-driven:** answers only, no next-step lists. Drift checks still run. After 2 drifts in a row, or a deep dive of about 5 messages, it offers once to switch to goal-driven.
   - The user can switch any time. The note records the mode.
2. **Drift:** anything that doesn't serve the goal, including related subtopics the goal doesn't need. A firm nudge, never a refusal: name the drift ("you're 3 steps from X, now into Y"), then offer 1. Branch it (Recommended), 2. Quick look, 3. Stay (logged as `deep_dive`).
3. **Branching:** a branch is a new chat. Thelyv can't create chats, so:
   - It offers "Save this part first?" before branching.
   - The main chat gets a back-link: `↳ branched: <goal> (Thelyv <ID>)`.
   - The skill writes a ready-to-send opening message with the branch ID, parent ID, goal and mode. The skill in the new chat reads them from it.
4. **Quick look:** a throwaway private chat (Claude incognito, ChatGPT temporary chat) for a fast answer. No ID; the main chat gets `↳ quick look: <question>` and the trail records it.
5. **Opening a new chat:**
   - Code can't create a chat, and can't tell whether the user is in a browser, desktop app or phone app. The AI knows which app it is from its own identity.
   - Saved links first: a `new_chat_link` line in `thelyv-settings`, else `new-chat-links.md`, giving every surface's link, labeled.
   - Only if the user says a link failed: ask where they are (1. Browser 2. Desktop app 3. Phone app), web-search the app's current link format, build it with code, and store it in `thelyv-settings` once it works. Searching every time would be too costly.
   - No link known: show the message to paste.
6. **IDs:** readable, built from the time and a topic word, e.g. `T-20261121-1432-https`. Branches add `.b1`, `.b2`, and a branch of a branch becomes `.b1.b1`. Thelyv can't see any chat ID, so the AI creates these itself.
7. **Acronyms:** spell one out on first use in a session, e.g. "CSR (Certificate Signing Request)". Again if it hasn't appeared for about 10 messages, and at the start of each branch.
8. **Web search:** only for architecture, design-decision and bug-fix questions, preferring official docs. Plain concept questions get no search. If web search is off, say so only when a question needed it, at most once per session.
9. **When the user is struggling** (signs: "I don't get it", asking twice for a simpler explanation, or repeating a question):
   - Offer once per concept: "Want 2 videos and 2 articles on this?"
   - Links come from a live web search only, never from memory.
   - Prefer recent material. If like or view counts aren't visible, fall back to the best-regarded one even if it's older.
   - Give one line per link on why it's worth watching or reading.
   - Without web search, say links can't be fetched right now rather than guessing.

## Interview mode
- Replaces the earlier "notebook" idea: the focused case is interview prep.
- Asks the topic, then level (1. Basic 2. Intermediate 3. Advanced) and "When is your interview?" (1. In less than 30 minutes 2. In a few hours 3. In 1 to 3 days 4. In a week or more) in one message, answered like "2, 1".
- **Very simple English** throughout, plainer the less time is left, so it helps under pressure.
- **Likely questions are Thelyv's job,** never the user's: under 30 minutes it answers from its own knowledge, searching only when an answer needs a current or exact fact. With more time it searches for real interview questions without asking and ranks them by how often they come up.
- **By time left:**
  - Under 30 minutes: 5 must-know points, 3 likely questions with 30-second spoken answers, a line for blanking, reassurance. Nothing new or deep.
  - A few hours: one-page summary, about 8 questions, try-first practice.
  - 1 to 3 days: full notes, a day-by-day plan with review on separate days, mock round.
  - A week or more: the same spread over the week, with harder follow-ups.
- Offers a mock round, then "1. Save this prep to Thelyv (Recommended) 2. Not now". Saving is still only on request.

## Saving and finding
- **Save only when the user asks** ("wrap up", "save"). Nothing is saved automatically. A session that's never saved leaves no trace; that's accepted.
- **Where notes go**, asked on first save as a numbered list: 1. Notion 2. Google Drive 3. Both 4. A `.md` download. Only destinations with tools are listed. The takeaway question comes in a separate message.
  - Notion: a "Thelyv" database with the fields as properties.
  - Google Drive: a `Thelyv/` folder.
  - Both: every note is written to both; `thelyv-find` searches Notion first, then Drive, without listing a note twice.
  - The choice is stored in a `thelyv-settings` note, which can also hold learned `new_chat_link` lines.
- **Title:** at most 6 words, written at save time, and saying what was actually learned. Branches are titled from their tangent.
- **Note format, schema_version 1:** one Markdown note per session, branch and interview prep, defined only in `skills/thelyv-save/note-format.md`. Treat it as a contract; the v2 UI rebuilds its index from it. The body leads with the real answer, so the note stands on its own without the chat. `type` (session, branch, interview) and `mode` were added before anything shipped, so the version stays 1.
- **Finding:** `/thelyv:thelyv-find <topic>` searches the user's notes through the same connector. It shows the title, date, goal and takeaway, with a link, then offers 1. Quiz me on it (Recommended) 2. Open the note 3. Continue learning from it. The quiz uses the note's 3 recall questions.
- **"Save this to Thelyv"** works in any chat too, not only Thelyv sessions.

## Areas, smarter save and reminders (grilling round 2, 2026-11-22)
- **Areas (umbrellas):** a feature of `thelyv-save` and `thelyv-find`, not a sixth skill. Menu option 5: "See what you've learned by area".
  - On save, Thelyv suggests one area (existing first, or a new one, or none); branches default to the parent's area. Field `umbrella`; still `schema_version 1` (no users yet).
  - New notes go to `Thelyv/<area-slug>/`, with the master note `_<area-slug>.md` beside them (Notion: `umbrella` select + a `<Area> (Thelyv master)` page). Old notes are never moved or edited.
  - The master note is rebuilt from the notes' fields on every save: a "how it fits together" chain, one line per note (date, link, takeaway), mistakes fixed, still fuzzy, next quiz. Grouped by subheadings past ~15 notes.
  - Markdown must read well in any viewer: no HTML, no wiki-links, no wide tables, normal relative links.
  - **PDF:** offered when an area's master is first created, when opening an area, and on request. The format (`area_format`) sticks per area. One growing file per area, rebuilt so earlier pages stay the same. If a file can't be updated, write a dated copy, check it has everything, then move the old one to the trash (never a permanent delete) and say so. Without code, a combined `.md`.
- **Smarter save:** keep what the user understood, drop the struggle. Understanding is found in three layers: their own words (kept verbatim in an "Understood:" line), then behaviour, then asking once ("Which do you feel solid on?"). New sections: "Mistakes fixed" (I thought X → actually Y, at most 3, feeding the recall questions, because corrected mistakes fade unless practised) and "Still fuzzy" (never recorded as understood).
- **Quizzes:** one note (3 questions) or a whole area (up to 5), fuzzy items and fixed mistakes first, ending with a Feynman "explain it simply" question. Started by "quiz me on…" or a "Thelyv quiz: <title>" message.
- **Reminders** (`skills/thelyv-save/reminders.md`): offered after each save, spaced on the forgetting curve: 1 day, 3 days, 1 week, 3 weeks, adapting after each quiz (missed → tomorrow). Two "no thanks" in a row stop the offer. Time question in 12-hour format with at most 3 options: the usual study time, the opposite part of the day, another time. Listed in thelyv-settings `## Reminders` for show and cancel.
- **Where reminders are created (grilling round 3, 2026-11-22, replacing the Python script):** first way that works:
  1. The app's own scheduler, only if its runs notify the user. Chat apps (Claude, ChatGPT, Gemini) use this. A cloud agent's scheduled runs only open a session nobody is told about, so they're skipped.
  2. A calendar connector (reaches the phone too).
  3. A shell script plus the OS's per-user scheduler, only for a coding agent on the computer in front of the user (`skills/thelyv-save/local-reminders.md`). PowerShell on Windows (Task Scheduler), one `sh` script on macOS (launchd) and Linux (systemd user timer). No Python (often missing or a store stub) and no cron (its notifications never show).
  4. An `.ics` file for everything else (cloud or remote agents, unclear cases, or the user said no), saying why in one line.
  5. A plain list of dates.
  - **"Local" is decided silently, never asked.** Any cloud signal (`CLAUDE_CODE_REMOTE=true`, `CODESPACES`, `GITPOD_WORKSPACE_ID`, SSH, container, CI) means not local. Otherwise a positive desktop-session sign is still required, because many cloud agents set no signal. The marker table has a Checked column like `new-chat-links.md`. WSL uses the Windows side.
  - The permission question names the computer and OS. The `## Reminders` line records `local: <hostname>`, so cancelling elsewhere says where the reminders live.
- **New-chat link length:** handoff lines in order of importance, ending `[end]`; the linked message is at most ~1,500 characters, measured after encoding against the "Max length" column in `new-chat-links.md` (14,000 documented for Claude Desktop, 2,000 safe default elsewhere); otherwise paste only. A branch that arrives without `[end]` asks for the full message.

## Later (v2+)
- **A very simple UI,** built only once v1 users ask "where can I see all this?". A hard-to-use UI won't get used.
- **A small server and a single index** across all notes.
- **Learning views:** depth and revisit stats, "where you drifted", learned-twice, the AI brief, collate threads and the drag-and-drop map.
- **More sources:** ChatGPT support, and importing old chats from data exports.
- **Learning patterns** (time of day, source mix, breadth vs depth). Notes keep `started_at` from day one so this works later.

## Metrics rules
- Measure takeaways written, revisits, `/thelyv:thelyv-find` use and quiz recall.
- Never streaks or links-per-day; they reward consumption.

## Platform facts (checked 2026-11-21)
- **Claude:** custom connectors work on every plan, and Free allows one. Typing `/` in chat lists skills.
- **Plugins:** a plugin can bundle skills and a remote MCP server.
- **Notion connector:** can create a database with custom properties, create pages, change titles and properties, and append or replace content. It works on every Notion plan; the Free plan has a block limit.
- **Google Drive connector:** can create files and folders. Updating an existing file and renaming one are unconfirmed, which is fine because v1 writes once.
- **Thelyv's server:** a remote MCP server gets no chat ID or title.
- **ChatGPT:** custom MCP tools that save data work only on Business and Enterprise/Edu; Pro is read-only.

## To test by hand
- Do the ChatGPT links in `new-chat-links.md` work (`chatgpt.com/?q=` and `?temporary-chat=true&q=`)? Only user reports so far.
- Is there a link that opens a Claude incognito chat with a message typed in?
- On a phone, does `https://claude.ai/new?q=` open the Claude app with the message?
- Does the `thelyv` skill show as plain `/thelyv` in Claude, or as `/thelyv:thelyv`?
- Does `npx skills add avin045/thelyv` install all five skills once the repo is public?
- Do the Notion setup steps in `skills/thelyv-save/connect.md` work in Codex, OpenCode and Cursor?
- Do the per-agent installs in the README work once the repo is public: Codex marketplace, `gemini extensions install`, `agy plugin install`, Cursor loading the root `plugin.json`?
- Grok: does `grok plugin install avin045/thelyv` install all five skills? Can the Grok app load skills at all? Does `https://grok.com/?q=hello` open a chat with "hello" typed in, and does `#private` work with it?
- Reminders: can a skill create ChatGPT Scheduled Tasks, Gemini scheduled actions or Claude scheduled tasks from a normal chat? Does the scheduled prompt reach the user's notes? Do their runs notify the user (ChatGPT Tasks, Gemini scheduled actions, Claude Desktop scheduled tasks)?
- Desktop reminders (`local-reminders.md`): on Windows 11 the notification showed with notifications on, and the fallback window with them off (both checked by hand, 2026-11-22); the `sh` script's logic passed in Git Bash. Still to test: Task Scheduler firing at the set time, macOS launchd plus the `osascript` notification (Script Editor permission prompt), Linux systemd timer plus `notify-send`, and WSL through `powershell.exe`.
- PDF: which PDF tools exist in each app's code sandbox (Claude, ChatGPT, Grok)?
- Question cards: does the Claude app show the AskUserQuestion card for Thelyv without an `allowed-tools` line (last30days has one)? Does Codex show `request_user_input` outside Plan mode? Does Grok Build show its question screen for a skill's choices? Does ChatGPT ever show its own question form for them?
- Can Free plans use skills? The docs conflict.

## Validation
- Keep having short conversations with people while using v1 yourself for 2 weeks. End each conversation by letting them try it.
- Ask:
  - "When you went down a rabbit hole last time, would you have wanted something to stop you?"
  - "Have you tried your AI's own chat search for this? What was missing?"

## Next steps
1. ~~Write the `thelyv` skill and plugin manifest in this repo.~~ Done; split into five skills after dogfooding round 1 (2026-11-21).
2. Dogfood it for 2 weeks alongside the conversations. Keep feedback in rounds, as in round 1.
3. Create `github.com/avin045/thelyv` and push.

## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default label names (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), recorded as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root, created only when needed. See `docs/agents/domain.md`.
