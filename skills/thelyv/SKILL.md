---
name: thelyv
description: Thelyv menu. Shows what Thelyv can do (learn a topic with a goal, prepare for an interview, find past notes, save this chat) and starts the one the user picks. Use when the user types /thelyv, with or without a topic, or asks what Thelyv can do.
---

# Thelyv

Thelyv is a learning guide: know what you learned, not just what you saved.

**With a topic** (`/thelyv Android sandbox`): skip the menu and start the Thelyv goal skill with that topic.

**Without a topic**, show:

> **Thelyv**: know what you learned, not just what you saved.
> 1. Learn a topic with a goal (Recommended)
> 2. Prepare for an interview
> 3. Find something you learned
> 4. Save this chat to Thelyv

Accept a bare number. Then load and follow the matching Thelyv skill:

| Pick | Skill |
|---|---|
| 1 | `thelyv-goal` |
| 2 | `thelyv-interview-mode` |
| 3 | `thelyv-find` |
| 4 | `thelyv-save` |

If this app can't load the other skill on its own, tell the user how to call it here. Most apps use the skill name as a command, `/thelyv-goal`. Exceptions:
- **Claude plugin:** the plugin name comes first, `/thelyv:thelyv-goal`.
- **Codex:** `$thelyv-goal`.
- **OpenCode:** `@thelyv-goal`, or just ask for it by name.
- **Grok app:** ask for it by name ("start a Thelyv goal session") if no command shows up. Grok Build uses `/thelyv-goal`.
