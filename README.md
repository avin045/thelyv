# Thelyv

**Know what you learned, not just what you saved.**

Thelyv is a learning guide for your AI chats. Type `/thelyv`, pick what you want to do, and Thelyv keeps you on your goal, moves deep tangents into their own chats, helps you prepare for interviews, and saves what you learned to your own Notion or Google Drive when you ask. A month later, `thelyv-find` gets it back and quizzes you on it.

Thelyv is a set of five skills in `skills/`, written to work in any AI tool that can load skills.

## Install

**What works best:**
- **Saving notes:** Notion (recommended) or Google Drive connected to your AI tool. Coding agents can also keep notes in a `~/Thelyv` folder on your computer. Without any of these, Thelyv gives you a `.md` file, or the note to copy. If nothing is connected, Thelyv walks you through connecting Notion the first time you save.
- **Checked links and up-to-date answers:** turn on web search.

**Any agent, one command** (uses the community [`skills`](https://github.com/vercel-labs/skills) installer, which finds the skills folder of every agent you have: Claude Code, Codex, OpenCode, Cursor, Gemini CLI and dozens more):
```
npx skills add avin045/thelyv
```

**Or use your agent's own installer:**

| Agent | Install |
|---|---|
| Claude apps (claude.ai, Desktop) | Turn on **Code execution and file creation** (Settings > Capabilities), then Customize > Plugins, add the marketplace `avin045/thelyv` and install **thelyv**. |
| Claude Code | `/plugin marketplace add avin045/thelyv`, then `/plugin install thelyv@thelyv` |
| Codex | `codex plugin marketplace add avin045/thelyv`, then install **thelyv** from the plugin list (`codex plugin add thelyv@thelyv`, or the Plugins page in the desktop app) |
| OpenCode | Copy the five folders in `skills/` into `~/.config/opencode/skills/` (OpenCode also reads `~/.claude/skills/` and `~/.agents/skills/`) |
| Cursor | Copy the five folders into `~/.cursor/skills/`. The repo is also a valid Cursor plugin (root `plugin.json`) once it's listed. |
| Gemini CLI | `gemini extensions install https://github.com/avin045/thelyv`, or skills only: `gemini skills install https://github.com/avin045/thelyv.git --path skills` |
| Antigravity CLI | `agy plugin install https://github.com/avin045/thelyv.git` |
| Grok Build | `grok plugin install avin045/thelyv`, or `grok plugin marketplace add avin045/thelyv` then `grok plugin install thelyv` (or copy the five folders into `~/.grok/skills/`) |
| Grok app (grok.com, phone) | If your Grok shows skills or plugins in Settings, add the five folders there. For saving, connect Notion or Google Drive at grok.com/connectors. |
| Anything else that loads `SKILL.md` folders | Copy the five folders in `skills/` into its skills folder, as its docs describe. |

**Calling the skills.** Most agents use the skill name as a command: `/thelyv`, `/thelyv-goal`, `/thelyv-find`. The Claude plugin puts the plugin name first (`/thelyv:thelyv-goal`), Codex uses `$thelyv-goal`, and OpenCode `@thelyv-goal`. Or just ask: "start a Thelyv session on React hooks".

## Use

| Skill | What it does |
|---|---|
| `/thelyv` | Menu: pick what to do. `/thelyv <topic>` starts learning that topic straight away. |
| `thelyv-goal` | Learn a topic with a goal. Choose goal-driven (Thelyv steers, with a Recommended next step) or user-driven (you steer). Drift gets numbered options: branch it, take a quick look in a private chat, or stay. |
| `thelyv-interview-mode` | Interview prep in very simple English, shaped by your level and how much time is left. |
| `thelyv-find <words>` | Find a past note, see everything you've learned in an area, or get quizzed: recall questions plus one "explain it simply" question. |
| `thelyv-save` | Save this chat as a note: only what you understood, plus the mistakes you fixed and what's still fuzzy. Notes are grouped by area with a short master note (PDF on request), and Thelyv can schedule quizzes spaced on the forgetting curve. "Save this to Thelyv" or "wrap up" works too, in any chat. |

Thelyv offers every choice as a question card where your app has one (Claude, Codex, Gemini CLI, Cursor and others). Elsewhere, choices are numbered, so you can answer with just "1".

## Status
v0.5.1: dogfooding. See [AGENTS.md](AGENTS.md) for the full product and architecture notes. <!-- x-release-please-version -->
