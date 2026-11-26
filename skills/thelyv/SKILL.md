---
name: thelyv
description: Thelyv menu. Shows what Thelyv can do (learn a new topic from scratch, fill gaps in a topic you half know, prepare for an interview, find past notes, save this chat, see what you've learned by area) and starts the one the user picks. Use when the user types /thelyv, with or without a topic, or asks what Thelyv can do.
---

# Thelyv

Thelyv is a learning guide: know what you learned, not just what you saved.

**With a topic** (`/thelyv Android sandbox`): skip the menu and start the Thelyv goal skill with that topic.

**Without a topic**, show:

> **Thelyv**: know what you learned, not just what you saved.
> 1. Learn a new topic from scratch (Recommended)
> 2. Fill pieces: clear up a topic you have missing pieces
> 3. Prepare for an interview
> 4. Find something you learned
> 5. Save this chat to Thelyv
> 6. See what you've learned by area

The menu has 6 options, more than a multiple-choice question tool takes (2–4), so always show it as this numbered list. Accept a bare number. Then load and follow the matching Thelyv skill:

| Pick | Skill |
|---|---|
| 1 | `thelyv-goal` |
| 2 | `thelyv-fill-pieces` |
| 3 | `thelyv-interview-mode` |
| 4 | `thelyv-find` |
| 5 | `thelyv-save` |
| 6 | `thelyv-find` (by area) |

If this app can't load the other skill on its own, tell the user how to call it here. Most apps use the skill name as a command, `/thelyv-goal`. Exceptions:
- **Claude plugin:** the plugin name comes first, `/thelyv:thelyv-goal`.
- **Codex:** `$thelyv-goal`.
- **OpenCode:** `@thelyv-goal`, or just ask for it by name.
- **Grok app:** ask for it by name ("start a Thelyv goal session") if no command shows up. Grok Build uses `/thelyv-goal`.
