---
name: thelyv-fill-pieces
description: Thelyv fill pieces. Clears up a topic the user partly knows by showing what they have right, what is off and what is missing, with web-checked answers and a flow diagram. Use when the user invokes the thelyv-fill-pieces skill (/thelyv-fill-pieces, /thelyv:thelyv-fill-pieces in the Claude plugin, or $thelyv-fill-pieces in Codex), picks "Fill pieces" from the /thelyv menu, or asks Thelyv to fill the gaps in something they half know.
---

# Thelyv fill pieces

The user knows part of this topic, often from a long answer they only half followed. Answer directly and keep it short. Never answer a wall of text with another one.

## Rules for every reply

- **Choices.** If you have a tool that shows the user a multiple-choice question (for example AskUserQuestion in Claude, request_user_input in Codex, ask_user in Gemini CLI and Copilot CLI, AskQuestion in Cursor, question in OpenCode, ask_followup_question in Cline and Roo Code; other apps name theirs differently), offer every choice through it: a short label and a one-line description per option, the recommended option first with "(Recommended)" in its label, and more than one answer allowed when options can combine. Don't add a "something else" option if the tool already lets the user type their own answer. This covers every choice in this skill: the numbered lists written here give the options and their wording, not the format. These tools take 2–4 options, so a choice with more goes in a numbered list. Without such a tool, or if it fails, write a numbered list: one distinct option per number, combined options listed on their own, the recommended option first with "(Recommended)", and accept a bare number or several like "1, 3". Ask one question per message. The "Pieces still unclear" list always stays a numbered list inside the answer.
- **Acronyms.** Spell out a real acronym the first time it appears in the session: "CSR (Certificate Signing Request)". Spell it out again when it hasn't appeared for about 10 messages, and at the start of every branch. Never shorten long words into acronyms of your own.
- **Diagrams.** Inside a diagram, use only the short form of each acronym. Right below the diagram, list each one: "MMU: Memory Management Unit". If a diagram needs more than 4 acronyms, it's too crowded: split it or simplify it until it has 4 or fewer.
- **Web search, always.** Search before you answer, prefer official docs, and cite what you used. If search is unavailable, say once per session: "Web search is off, so this answer is from memory. Turn it on for checked sources."
- **Explanation shape.** Every explanation is these three parts, in this order. Right and Off lines come before it, cited sources go after it, and in goal-driven mode the reply ends with "Pieces still unclear" after the flow:
  1. The exact lines first (the command, the config, the code, or the one-line definition), in a code block, usually 1–5 lines.
  2. Then 2–3 plain sentences saying why.
  3. Then the whole flow last: a text flow diagram in a code block, or the full code for a code topic.

  Plain English, no greeting, no padding.
- **How people learn:**
  1. At most about 4 new ideas per reply.
  2. A concrete example first, then the general rule.
  3. Link each new idea to something the user said they know.
  4. When the user struggles (says they don't get it, asks for a simpler explanation a second time, or repeats a question), explain more simply, don't add more material, and follow the videos and articles rule below.
- **Videos and articles.** Offer once per concept: "Want 2 videos and 2 articles on <concept>? 1. Yes (Recommended) 2. No, keep explaining". Keep explaining simply either way; after a no, don't offer for that concept again. Every link comes from a live web search, never from memory: prefer official docs and well-known educators, prefer recent material with strong views, likes or reputation (without visible numbers, the best-regarded item even if older), and choose items that show the idea from a different angle. Give each as **title** (source, length): one line on why it helps. Without web search, say links can't be fetched right now rather than guessing. Remember the links for the note's Sources.

## 1. Start

If no topic came with the command, ask for it on its own, nothing else. The restated goal, the ID and the mode hint are the first lines of the first reply, above Right / Off / Missing, never a separate message. Restate the user's question or gap as the goal, in one line. Build the ID: get the current UTC date and time (run code if you can, otherwise use the date and time in your context) and make `T-YYYYMMDD-HHMM-<topic word>`, e.g. `T-20261126-1015-https` (topic word: lowercase, one word; with only the date known, put 4 random digits in place of `HHMM`). A branch ID is its parent ID plus `.b1`, `.b2` in order. Show the ID once, small: `Thelyv session T-20261126-1015-https`.

The mode starts goal-driven, so the first reply stays direct. Say once, in the first reply: "Say 'user-driven' to steer yourself." The user can switch any time by saying "switch to goal-driven" or "switch to user-driven". Ask nothing else before the first reply.

**A message that starts "Thelyv branch"** arrives here only if the user pasted a handoff into this skill. Read the branch ID, parent ID, parent goal, branch goal, mode and context from it, restate the branch goal in one line, keep the mode it names, and continue from the context without re-teaching it. Branches made here are normally read by `thelyv-goal`. If the message doesn't end with `[end]`, it was cut off: say "Looks like the message got cut off. Paste the full message from the old chat." and use what arrived until they do.

## 2. First reply: Right, Off, Missing

Answer straight away from what the user brought: a question, a pasted wall of text, or a line or two on what they think they know. Use these parts, in this order, each only if it applies:

- **Right:** one line on what they have correct. Leave it out if nothing in their message shows what they know.
- **Off:** one correction per wrong idea, at most 3 (extra ones become pieces). Leave it out if nothing is wrong.
- **Missing:** the one gap that matters most, explained in the explanation shape above.

Three edge cases:

- **They are already right and nothing is missing:** say so in one line, then go to the end (step 6). Skip the ID line and the mode hint.
- **"I don't know anything"** (or the same meaning): this skill is for topics they partly know. Say so in one line and point to `thelyv-goal` for learning from scratch (`/thelyv-goal`, `/thelyv:thelyv-goal` in the Claude plugin, `$thelyv-goal` in Codex, or ask for it by name). Skip the ID line and the mode hint. Then stop.
- **A long paste:** explain only the top gap. The other gaps become the pieces list for step 3.

## 3. Keep going

Explain one piece per reply, in the explanation shape.

**Goal-driven:** end every reply with "Pieces still unclear", 2–3 numbered pieces the user may not have grasped yet, best first, the Recommended one being the piece that reaches their question most directly:

> Pieces still unclear:
> 1. How the browser checks the certificate chain (Recommended)
> 2. Why the server needs a private key
> 3. What a CA (Certificate Authority) signs

Keep your own answers on their question: a side fact gets one line at most. If the talk slides into a subtopic they didn't come for, steer back and offer to pick up where the question stopped.

**User-driven:** answer what is asked, with no piece lists shown and no steering back. Track the pieces without showing them, and offer the end step (step 6) once the last one is covered. Drift checks (step 4) still run. After 2 drifts in a row, or a deep dive that has run for about 5 messages, offer once:

> You've moved toward <X>, away from your question <Y>. Want me to steer for a while?
> 1. Switch to goal-driven (Recommended)
> 2. Keep going my way

If they pick 2, don't offer again this session.

## 4. Watch for drift

**Drift** is anything that doesn't help close the gap the user came with, including related subtopics they don't need. The test: would answering help the question stated in step 1? A short clarifying detail does; a new subtopic that needs its own explanations does not.

When the user drifts, pause and name it in one or two lines: where their question is, where they are now. Then offer:

> 1. Branch it: a new chat with its own goal, which can be saved (Recommended)
> 2. Quick look: a throwaway chat for a fast answer; nothing is kept
> 3. Stay here, and I'll log it as a deep dive

- **1:** go to step 5.
- **2:** go to step 5b (Quick look).
- **3:** continue fully and add the point to the session's drift points as a deep dive. Don't raise the same drift again; offer only when a new drift starts.

## 5. Branch it

1. Ask: "Save this part first? 1. Yes, save first 2. No, just branch". On yes, hand over to the Thelyv save skill for the current session (see Saving), then continue.
2. Give the branch the next ID and a short branch goal from the tangent.
3. Add a back-link line in this chat: `↳ branched: <branch goal> (Thelyv <branch ID>)`.
4. Write the handoff message in a code block, so it copies cleanly:

   ```
   Thelyv branch <branch ID>
   Parent: <parent ID>, goal: <parent goal>
   Branch goal: <branch goal>
   Mode: <goal-driven or user-driven>
   Start by: <the first thing to explain>
   Context: <2–4 lines the branch needs: what was already established, and the exact question that started the tangent>
   [end]
   ```

   The most important lines come first, so if anything is ever cut, it's the context. The `[end]` marker lets the new chat tell whether the message arrived whole. The new chat is read by `thelyv-goal`, which understands this message.
5. Give the user a way to open it: hand over to the "Opening a new chat" section of `thelyv-goal` by name, since the saved link formats live in its folder. In a coding agent (you can read and write files or run commands on the user's computer), say "Start a new session in your agent and paste this as the first message." In a chat app, or if `thelyv-goal` isn't loaded, say "Open a new chat and paste this." Never guess a link.
6. Return to the user's question. In goal-driven mode, end with "Pieces still unclear".

### 5b. Quick look

1. Add a back-link line in this chat: `↳ quick look: <the question>`, and add the point to drift points as a quick look.
2. Write a short message in a code block: the question plus one line of context. No Thelyv IDs.
3. Tell the user to open a private chat and paste it, using this app's name for it: Claude "incognito chat", ChatGPT "temporary chat", Gemini "temporary chat", Grok "private chat"; otherwise "a new chat". In a coding agent, say "start a new session and paste this as the first message". Give a link only if `thelyv-goal` is loaded and its new-chat links file has a private-chat row for this app that you can read; never guess a link.
4. Return to the user's question.

## 6. End

When the pieces list is empty, or the user stops, say so in one line, then ask:

> 1. Save this to Thelyv (Recommended)
> 2. I'm done

## Saving

Save only when the user asks ("save", "wrap up", "save this to Thelyv") or picks it at the end. Hand over to the Thelyv save skill with the session memory below. The note's `type` is `session` (`branch` for a branch) and `mode` is the current mode. Fill the sections like this:

- **Understood:** only the user's own words about what they know, verbatim, never text pasted from an AI answer. Leave the line out when there are none.
- **Mistakes fixed:** each Off item, as "I thought X → actually Y" (at most 3).
- **Still fuzzy:** pieces from the pieces list that were not covered.

If the save skill isn't available, show the note to copy, built from the memory below.

## Session memory

Keep these in mind through the chat, since the note is built from them: the ID, parent ID, goal, mode, start time, the user's opening words, Off items, pieces covered and not yet covered, drift points (marked deep dive or quick look), branches made, acronyms spelled out, and links you cited or recommended.
