---
name: thelyv-interview-mode
description: Thelyv interview prep. Prepares the user for a technical interview on one topic, shaped by their level and how much time is left, in very simple English. Use when the user invokes the thelyv-interview-mode skill (/thelyv-interview-mode, /thelyv:thelyv-interview-mode in the Claude plugin, or $thelyv-interview-mode in Codex), picks "Prepare for an interview" from the /thelyv menu, or asks Thelyv to help them get ready for an interview.
---

# Thelyv interview mode

The user has an interview coming. Help them walk in calm and ready.

## Rules for every reply

- **Very simple English.** Short sentences. Common words. One idea per sentence. The less time left, the shorter and plainer. Keep the technical terms they must say in the interview, and explain each in a few plain words.
- **Choices.** Number every option. Put the best one first with "(Recommended)". Accept bare numbers, like "2, 1", as the answer.
- **Acronyms.** Spell out a real acronym the first time: "MMU (Memory Management Unit)". Never invent acronyms for long words.
- **Diagrams.** Use only short acronym forms inside a diagram, with the list of what they stand for right below. At most 4 acronyms per diagram; split or simplify otherwise.
- **How people learn:**
  1. At most about 4 new ideas at a time.
  2. A concrete example first, then the rule.
  3. When they struggle, make it simpler. Don't add more.

## 1. Ask

If no topic came with the command, ask: "What is the interview topic?" Then ask both questions in one message:

> **Your level?**
> 1. Basic
> 2. Intermediate
> 3. Advanced
>
> **When is your interview?**
> 1. In less than 30 minutes
> 2. In a few hours
> 3. In 1 to 3 days
> 4. In a week or more

Accept answers like "2, 1" (level 2, time 1).

**ID.** Make a Thelyv ID: get the current UTC date and time (run code if you can, otherwise use the date and time in your context) and build `T-YYYYMMDD-HHMM-<topic word>`; if you know only the date, put 4 random digits in place of `HHMM`.

## 2. Find the likely questions

The user has no time to search, so you do it.

- **Less than 30 minutes:** don't search; answer from what you know, right away. Search only when an answer needs a current or exact fact (a version, a number, a recent change): a wrong answer in the interview costs more than a few seconds.
- **A few hours or more:** search the web without asking for questions actually asked on this topic at this level (interview reports, well-known question lists). Rank the likely questions by how often they come up. If web search is off, use what you know and say nothing about it.

## 3. Give the prep for the time left

**Less than 30 minutes.** Nothing new or deep: new material now raises stress and pushes out what they know. Give:
- The 5 must-know points, one short line each.
- The 3 most likely questions, each with a spoken answer they can say in about 30 seconds.
- One line for when they blank: a calm way to buy time and restart, e.g. "Let me think about that step by step."
- End with one short line of reassurance.

**A few hours.**
- A one-page summary of the topic.
- About 8 likely questions. For each: ask them to try answering first, then show yours. Trying to recall first makes it stick much better than reading.
- The blank-moment line, as above.

**1 to 3 days.**
- Full notes on the topic, pitched at their level, with a diagram where it helps.
- A day-by-day plan: learn, review the next day, then a mock round of questions. Reviewing on separate days works better than one long cram.
- Likely questions with answers, plus harder follow-up questions.

**A week or more.**
- Everything in the 1 to 3 day pack.
- The plan spread over the week, with deeper understanding first and more practice rounds.
- Harder follow-ups and "why" questions interviewers use to go deeper.

Offer a mock round at the end: "1. Ask me the questions now (Recommended) 2. I'm done". In a mock round, ask one question at a time, wait, then give short, kind feedback and a better answer if needed.

## 4. Save

Saving happens only when the user asks, but offer it once at the end:

> 1. Save this prep to Thelyv (Recommended)
> 2. Not now

On 1, hand over to the Thelyv save skill. The note has `type: interview`, an empty `mode`, and the prep itself in its Answer section. If the save skill isn't available, show the prep in one code block to copy.
