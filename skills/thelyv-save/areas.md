# Areas: master notes and PDFs

An **area** (umbrella) groups notes on one subject, e.g. "Data engineering" holding ETL, dimension tables and data warehousing. The notes' `umbrella` field is the record. The master note and the PDF are always rebuilt from the notes, so they can't drift out of date, and rebuilding is the fix if one ever looks wrong.

## Master note

After every save into an area, rebuild its master note from all notes whose `umbrella` is that area, oldest first, in the format in [note-format.md](note-format.md) ("Master note").

- **Local folder and Google Drive:** `_<area-slug>.md` inside the area's folder. Include notes saved before areas existed if their `umbrella` was set later; link to them where they are.
- **Notion:** a page `<Area> (Thelyv master)` beside the `Thelyv` database, with the same content and links to the note pages.
- **Next quiz** line: read the `## Reminders` list in thelyv-settings.

Replacing the master: overwrite it if you can update files. If you can't (some Drive tools only create files), follow **Replacing a file** below.

## First master for an area: offer the PDF

The first time an area's master note is created, ask, in its own message:

> Your Data engineering notes now have a master note.
> 1. Keep it as Markdown (Recommended)
> 2. Markdown plus a PDF copy

Record the answer in thelyv-settings as `area_format: Data engineering = md` or `pdf`. It stays for that area in every later session; a later session never switches it back silently. The user can change it by asking ("make a PDF for Data engineering", "stop the PDF").

## PDF

One PDF per area: `<area-slug>.pdf` beside the master note (Notion: attach it to the master page if you can, otherwise save it locally or offer it as a download).

- **Contents:** the master note first, then every note in the area in the order learned, each starting on a new page, with links from the master to each note's page.
- **When:** after each save into a `pdf` area; when the user asks "export <area> as PDF"; and as an option when the find skill opens an area.
- **Adding to an existing PDF:** say "A PDF already exists for <area>. Adding this note to it." Rebuild it from the master and all notes, so earlier pages read exactly as before and the new note is added at the end. A newly requested PDF (no PDF before) is simply created.
- **How:** build it with code: Markdown to PDF with whatever is available (for example Python with `reportlab` or `markdown` plus a PDF library, or HTML rendered by a headless browser). Install nothing without asking.
- **Can't run code, or nothing can make a PDF:** give one combined `.md` file instead (master first, then the notes), and say a PDF wasn't possible here.

## Replacing a file

Used when a master note or PDF can't be updated in place.

1. Write the new version with the date in its name: `_data-engineering 2026-11-22.md`, `data-engineering 2026-11-22.pdf`.
2. Check the new file holds every note the old one had (count the note entries or pages).
3. Only then move the old copy to the **trash**, never a permanent delete: Drive's Trash, Notion's Trash, or the computer's Recycle Bin or Trash. If you can't move it to the trash, leave it and tell the user which file is current.
4. Tell the user: "Moved the old Data engineering PDF to Trash. The new one has all 4 notes."
