# Connecting Notion or Google Drive

Use this when the user wants to save to Notion or Google Drive (or find notes there) but this chat has no tools for it. Give only the steps for the app you're running in, in plain numbered steps. Before they start, keep the note safe: save it as a `.md` file (or show it to copy) so nothing is lost while they connect.

After connecting, most apps need a new chat or session before the tools appear. Tell the user: "Once it's connected, open a new chat and say 'save this to Thelyv', pasting the note if this chat is gone."

## Which app are you in?

You know which **model** you are, but the **app** can differ: Claude models also run inside Claude Code, Cursor, OpenCode and others. Read your own instructions for the app's name. If you have tools that read and write files on the user's computer or run shell commands there, you're in a coding agent, not a chat app. If you still can't tell, ask: "Which app are you using? 1. Claude (web, desktop or phone) 2. ChatGPT 3. Claude Code 4. Another app".

## Notion (recommended)

Notion runs one official server for all apps: `https://mcp.notion.com/mcp`. The user signs in to Notion in the browser; no API key is needed.

| App | Steps |
|---|---|
| Claude (web, desktop, phone) | Settings > Connectors, find **Notion**, click Connect, and sign in. In a chat, make sure Notion is switched on in the tools menu. |
| ChatGPT | Settings > Apps (connectors), connect **Notion**. Saving notes needs a plan where apps can write (Business, Enterprise or Edu); on other plans ChatGPT can read Notion but not save to it, so use a `.md` file instead. |
| Claude Code | Run `claude mcp add --transport http --scope user notion https://mcp.notion.com/mcp`, then in Claude Code type `/mcp`, pick notion and sign in. |
| Codex | Run `codex mcp add notion --url https://mcp.notion.com/mcp`, then `codex mcp login notion`. |
| OpenCode | In `opencode.json`, under `"mcp"`, add `"notion": { "type": "remote", "url": "https://mcp.notion.com/mcp" }`, then run `opencode mcp auth notion`. |
| Cursor | In `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (all projects), under `"mcpServers"`, add `"notion": { "url": "https://mcp.notion.com/mcp" }`, restart Cursor, and sign in when asked. |
| Any other app | Find "add an MCP server" or "connectors" in its settings or docs, add a remote server named `notion` with the URL above, and sign in when asked. |

## Google Drive

| App | Steps |
|---|---|
| Claude (web, desktop, phone) | Settings > Connectors, find **Google Drive**, click Connect, and sign in. |
| ChatGPT | ChatGPT's Google Drive app can search and read files but not save new ones, so use Notion or a `.md` file instead. |
| Coding agents and other apps | Google's official Drive MCP server (`https://drivemcp.googleapis.com/mcp/v1`) needs a Google Cloud project with its own OAuth client, which takes 15+ minutes to set up. Recommend Notion, or the local Thelyv folder, instead. If they still want Drive, point them to Google's guide: "Configure the Drive MCP server" on developers.google.com. |

## When it doesn't work

- **Tools still missing:** open a new chat or session; in Claude, check the connector is switched on for this chat.
- **Sign-in loop or error:** disconnect and connect again from the same settings page.
- Don't troubleshoot further than this. Offer the `.md` file (or the local Thelyv folder) so the user isn't stuck.
