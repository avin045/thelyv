# Links that open a new chat with a message typed in

Use only rows for the chat app you're running in, never for the model you are: a Claude model inside Claude Code, Cursor or OpenCode, or Grok inside Grok Build, gets no link from this table. Give every matching row, labeled by its surface, since you usually can't tell which one the user is on. These links can change without notice: when the user says one didn't work, follow the fallback in SKILL.md ("Opening a new chat", step 5).

| App | Chat kind | Surface | Link | Checked |
|---|---|---|---|---|
| Claude | normal | Browser | `https://claude.ai/new?q=<message>` | Tested by hand, 2026-11-21 |
| Claude | normal | Desktop app | `claude://claude.ai/new?q=<message>` | Claude's docs: opens unsent, up to about 14,000 characters |
| ChatGPT | normal | Browser | `https://chatgpt.com/?q=<message>` | User reports only; not yet tested |
| ChatGPT | private (temporary chat) | Browser | `https://chatgpt.com/?temporary-chat=true&q=<message>` | User reports only; not yet tested |
| Grok | normal | Browser | `https://grok.com/?q=<message>` | User reports only; not yet tested |

`<message>` is the message URL-encoded, with every character outside letters and digits encoded.

Present each as "Open in <surface>: <link>". The message opens typed in but unsent; the user presses send.
