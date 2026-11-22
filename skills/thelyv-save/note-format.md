# Thelyv note format (schema_version 1)

Every Thelyv note follows this format exactly, whatever the destination. Later Thelyv versions rebuild their index from these fields, so keep the field names and types as written.

## Fields

| Field | Type | Value |
|---|---|---|
| `schema_version` | number | `1` |
| `thelyv_id` | text | The session or branch ID, e.g. `T-20261121-1432-https.b1` |
| `parent_id` | text | The parent's ID for a branch; empty for a top-level session |
| `type` | text | `session`, `branch` or `interview` |
| `mode` | text | `goal-driven` or `user-driven`: the mode the session ended in. Empty for `interview` |
| `title` | text | The note title (rules below) |
| `goal` | text | The goal as restated at session start |
| `topic` | text | One or two lowercase words for the broad area, e.g. `tls`, `encoding`, `react` |
| `started_at` | datetime | Session start, ISO 8601 UTC, e.g. `2026-11-21T14:32:00Z` |
| `saved_at` | datetime | Save time, ISO 8601 UTC |
| `provider` | text | The app this session runs in (not the model), lowercase with hyphens: `claude`, `claude-code`, `chatgpt`, `codex`, `gemini`, `gemini-cli`, `copilot`, `cursor`, `opencode`, `grok`, `grok-build`, or the app's own name. `unknown` if you can't tell. |
| `drift_points` | list of text | Short phrases, one per drift; empty list if none |
| `deep_dive` | true/false | `true` if the user chose to stay on any drift |
| `chat_url` | text | The chat link if the user gave one; otherwise empty |
| `takeaway` | text | The user's one line in their own words; empty if they skipped |

## Title

- At most 6 words.
- Names what was actually learned, which is often narrower than the goal: "Debugging expired certificate chain errors", not "HTTPS certificates".
- A branch is titled from its tangent: "How X.509 certificate chains verify".
- Plain words only: no ID, date, emoji or quotes.

## Body

```markdown
## Answer
The real content, complete enough that the user never needs the chat: the key explanation, steps, code, commands and the final working solution. Keep code blocks as code blocks.

## Summary
3–5 sentences: what was learned and how the session got there.

## Takeaway
The user's line, or "(skipped)".

## Trail
- Parent: <parent title and ID>, or "none"
- Branches: <branch goal and ID>, one per line, or "none"
- Drift points: one per line, marked "(deep dive)" where the user stayed, or "(quick look)" where they took it to a throwaway chat

## Recall questions
1. <short question testing a key idea>
   Answer: <one line>
2. …
3. …

## Acronyms
- CSR: Certificate Signing Request

## Sources
- <title>: <url> (one per cited or recommended link)
```

Leave a section out when it would be empty, except Answer, Summary and Recall questions. Always write exactly 3 recall questions: the find skill (`thelyv-find`) quizzes the user with them later.

An `interview` note's Answer holds the prep itself: must-know points, likely questions with spoken answers, and the study plan if there was one.
