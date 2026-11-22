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
| `topic` | text | One or two lowercase words for the narrow subject, e.g. `tls`, `etl`, `react` |
| `umbrella` | text | The area this note belongs to, in plain words, e.g. `Data engineering`. Empty if the user chose no area. The master notes are built from this field. |
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
Only the explanation that worked: the version the user understood, complete enough that they never need the chat. Key explanation, steps, code, commands and the final working solution. Keep code blocks as code blocks. Leave out repeated questions and explanations that didn't land.

Understood: "<the user's own words when it clicked, e.g. 'ohh so facts are the events'>"

## Summary
3–5 sentences: what was learned and how the session got there.

## Takeaway
The user's line, or "(skipped)".

## Mistakes fixed
- I thought <X> → actually <Y>
(at most 3)

## Still fuzzy
- <idea the user said is still unclear>

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

- Leave a section out when it would be empty, except Answer, Summary and Recall questions. Leave out the "Understood:" line when the user never said it in their own words.
- Always write exactly 3 recall questions: the find skill (`thelyv-find`) quizzes the user with them later. If there are mistakes fixed or still-fuzzy ideas, at least one recall question must test one of them.
- An `interview` note's Answer holds the prep itself: must-know points, likely questions with spoken answers, and the study plan if there was one.

## Writing style (every note and master note)

The files must read well in any viewer: GitHub, VS Code, Obsidian, phone apps, even Notepad.

- Plain Markdown only: headings, short paragraphs, bullet lists, code blocks.
- No HTML, no Notion-only blocks, no `[[wiki-links]]`.
- Links are ordinary relative links with spaces encoded: `[ETL pipelines explained](ETL%20pipelines%20explained.md)`.
- No wide tables (the field list in front matter is fine); use lists.
- One blank line between blocks. Short sentences, plain words.

## Master note (one per umbrella)

Built by the save skill from the notes' fields, never edited by hand. File `_<area-slug>.md` inside the area's folder (Notion: a page titled `<Area> (Thelyv master)`).

```markdown
# Data engineering

What you've learned so far, in the order you learned it.

How it fits together: ETL moves the data → the dimension layer shapes it → the warehouse stores it for analysis.

## Notes

1. 2026-11-02 · [ETL pipelines explained](ETL%20pipelines%20explained.md) · "Extract, transform, load, in that order"
2. 2026-11-09 · [Dimension tables vs fact tables](Dimension%20tables%20vs%20fact%20tables.md) · "Facts are events, dimensions describe them"

## Mistakes you fixed

- I thought a warehouse was just a big database → it's organised for analysis, not transactions

## Still fuzzy

- Slowly changing dimensions

Next quiz: Thursday, 9:00 AM

Say "quiz me on Data engineering" to revise this area.
```

- "How it fits together": 2–3 lines connecting the notes in learning order, in plain words.
- One line per note: date, linked title, takeaway (or the summary's first sentence if the takeaway was skipped). Notes saved before areas existed are linked where they already are.
- Past about 15 notes, group the list under short subheadings ("Pipelines", "Modeling").
- "Mistakes you fixed" and "Still fuzzy" collect those sections from every note in the area; drop a fuzzy item once a later note or quiz shows it was understood.
- "Next quiz" appears only when a reminder exists (thelyv-settings "Reminders").
