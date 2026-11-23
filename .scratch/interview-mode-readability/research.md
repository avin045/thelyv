# Research: making interview-mode replies easy to understand at a glance

Date: 2026-11-23. Scope: evidence for how `skills/thelyv-interview-mode/SKILL.md` should shape each reply.
Status: research only. No skill text changed.

Evidence labels used below:
- **Strong**: meta-analysis, or a replicated primary finding I read in the original.
- **Moderate**: one solid primary study, or a meta-analysis I could only read through its abstract.
- **Weak**: practitioner guidance, a secondary source, or my own extrapolation to chat text.

---

## 1. Bottom line

- **Lead every reply with the answer, then offer more.** Not a menu with no content. (NN/g 2026 "truncated pyramid"; AR 25-50 BLUF; NN/g F-pattern.)
- **One reply = one chunk.** At most 4 new ideas and about 250 words (about one minute of reading). Cut greetings, recaps and filler: extra material hurts most when time is short. (Cowan 2001; Rey 2012; Brysbaert 2019.)
- **End each reply with exactly one question.** Merge "mock round?" and "save?" into one choice, and offer saving only when the user is finishing.
- **Under 30 minutes: nothing new, no quizzing first.** Give a short pack to read and say aloud. Stress harms learning of new material. Testing beats rereading only after a delay of days. (Shields 2017; Roediger & Karpicke 2006.)
- **With hours or days: try first, then see the answer, spread over days.** This is the best-supported study method, and it protects recall under stress. (Dunlosky 2013; Smith 2016; Cepeda 2008.)
- **Shape by level.** Basic: key terms first, a worked example, Thelyv picks the order. Advanced: short answers, try first, a menu to choose from. (Expertise reversal; learner control helps mainly people who already know the topic.)
- **The four ideas the user found are each partly supported.** Use them as tools for specific cases, not blanket rules (see the table in section 3).
- **Write the rules as positive, countable instructions, with one example reply per time bucket.** Models do not count words reliably. (Anthropic, Google docs; LIFEBench 2025.)

---

## 2. Findings by area

### 2.1 Working memory is small: about 4 chunks

- Adults hold about 3 to 5 chunks in mind at once when they can't rehearse or regroup. (Cowan 2001, *Behavioral and Brain Sciences*, "The magical number 4 in short-term memory", doi:10.1017/S0140525X01003922.) **Strong.**
- Miller's "7 ± 2" is usually misquoted. Cowan treats it as a rough estimate and partly a rhetorical device, not a measured limit. (Miller 1956, *Psychological Review*, doi:10.1037/h0043158; Cowan 2001.)
- A chunk is a meaningful unit, not a bullet. Four bullets that each hold two new ideas are eight ideas.
- Cognitive load theory: new information goes through this small working memory. Load from poor presentation ("extraneous load") competes with load from the topic itself. (Sweller 1988, *Cognitive Science*, doi:10.1207/s15516709cog1202_4; Sweller, van Merriënboer & Paas 2019, *Educational Psychology Review*, doi:10.1007/s10648-019-09465-5.) **Strong.**
- What it means: the skill's "about 4 new ideas at a time" rule is right. Apply it per reply, and count ideas, not lines.

### 2.2 Mayer's multimedia principles

These were tested mostly on narrated animations and short lessons, not chat. Applying them to chat text is an extrapolation. **Moderate** for chat.

- **Coherence / seductive details.** Interesting but unneeded material lowers learning. The harm is larger when study time is limited. (Rey 2012, *Educational Research Review*, meta-analysis of 39 effects, doi:10.1016/j.edurev.2012.05.003; Mayer & Moreno 2003, *Educational Psychologist*, "Nine ways to reduce cognitive load", doi:10.1207/S15326985EP3801_6.) **Strong.** This is the best evidence for "no intro or outro fluff", and it bites hardest in the under-30-minute bucket.
- **Segmenting.** Learner-paced, meaningful segments beat one continuous block. Effects are small to medium on retention and transfer. Two costs: total learning time goes up, and people with more prior knowledge gained more (on retention). (Rey et al. 2019, *Educational Psychology Review*, 56 studies, doi:10.1007/s10648-018-9456-4.) **Strong** for the effect; the prior-knowledge result is from the abstract only.
- **Signaling.** Headings, previews, bold and summaries improve memory for the signaled content. Memory for unsignaled content is usually unchanged. (Lorch 1989, *Educational Psychology Review*, doi:10.1007/BF01320135.) A later meta-analysis of 103 studies reports g ≈ 0.53 for retention and 0.33 for transfer. (Schneider, Beege, Nebel & Rey 2018, *Educational Research Review*, doi:10.1016/j.edurev.2017.11.001.) **Moderate**: I saw these numbers only in a secondary summary.
  - Implication: bold works because it is rare. Bold everything and nothing stands out.
- **Pre-training.** People learn a system better when they first learn the names and traits of its parts. (Mayer, Mathias & Wetzell 2002, *J. Experimental Psychology: Applied*, doi:10.1037/1076-898X.8.3.147.) **Moderate.** Fits Basic level: give the 3–4 key terms before the explanation.

### 2.3 Worked examples and the expertise reversal effect

- Novices learn more from studying a worked solution than from solving the same problem cold. (Atkinson, Derry, Renkl & Wortham 2000, *Review of Educational Research*, doi:10.3102/00346543070002181.) **Strong.**
- What helps novices can stop helping, or hurt, more expert learners. Extra guidance becomes redundant load. (Kalyuga, Ayres, Chandler & Sweller 2003, *Educational Psychologist*, "The expertise reversal effect", doi:10.1207/S15326985EP3801_4.) **Strong.**
- What it means: Basic gets a full worked answer with an example first. Advanced gets a terse answer, tries first, and gets harder follow-ups. One format for all levels is wrong in both directions.

### 2.4 Learner control (the evidence behind "menu and expand")

- Letting learners choose what to see and in what order had almost no effect on achievement: g ≈ 0.05 across 18 studies. (Karich, Burns & Maki 2014, *Review of Educational Research*, doi:10.3102/0034654314526064.) **Moderate**: the number comes from a secondary citation; the near-zero result is also in press coverage of the paper.
- Learner control tends to help people with high prior knowledge and good self-regulation, and not novices. (Scheiter & Gerjets 2007, *Educational Psychology Review*, doi:10.1007/s10648-007-9046-3.) **Moderate.**
- Progressive disclosure works in UIs only when the first level holds what most people need, the way to go deeper is obvious, and there are no more than 2 levels. (Nielsen 2006, NN/g, https://www.nngroup.com/articles/progressive-disclosure/.) **Weak to moderate** (expert guidance from usability testing).
- What it means: a menu helps Intermediate and Advanced users pick their gaps. For Basic users under stress it shifts a decision onto the person least able to make it.

### 2.5 Retrieval practice, spacing, and very short prep windows

- Practice testing and spaced practice are the two study methods rated "high utility". Rereading and highlighting are rated "low". (Dunlosky et al. 2013, *Psychological Science in the Public Interest*, doi:10.1177/1529100612453266.) **Strong.**
- **The key catch for short windows.** On a test 5 minutes later, restudying beat testing (81% vs 75% recalled). After 2 days and 1 week, testing won clearly (68% vs 54%; 56% vs 42%). Restudying also made students more confident. (Roediger & Karpicke 2006, *Psychological Science*, doi:10.1111/j.1467-9280.2006.01693.x; read in the original.) **Strong.**
  - Caveat: those tests gave no feedback. With feedback, the short-delay gap may shrink. I found no study of a 15–30 minute pre-interview window.
- Unsuccessful attempts to answer before seeing the answer still improve later learning. (Kornell, Hays & Bjork 2009, *JEP: Learning, Memory, and Cognition*, doi:10.1037/a0015729.) **Moderate.** Not tested on anxious people minutes before a high-stakes event.
- Learning by retrieval practice protected recall from acute stress; learning by restudy did not. Stress came 24 hours after learning. (Smith, Floerke & Thomas 2016, *Science*, doi:10.1126/science.aah5067.) **Moderate**: one study; a commentary notes the tested group also remembered more overall.
- Spacing: the best gap between study and review is about 20–40% of the time until a test 1 week away. (Cepeda, Vul, Rohrer, Wixted & Pashler 2008, *Psychological Science*, doi:10.1111/j.1467-9280.2008.02209.x.) **Strong.** For an interview in 7 days, review after about 1.5–3 days.
- Saying material aloud improves memory over silent reading (the "production effect"). (MacLeod, Gopie, Hourihan, Neary & Ozubko 2010, *JEP: LMC*, doi:10.1037/a0018785.) **Moderate**: mostly word lists, not explanations.
- What it means: "try first" is right for "a few hours" and longer. Under 30 minutes, reading the answers and saying them aloud is at least as good, and less stressful.

### 2.6 Stress, anxiety and performance

- Anxiety weakens attention control: blocking distractions and switching focus. It hurts efficiency (effort per result) more than accuracy. (Eysenck, Derakshan, Santos & Calvo 2007, *Emotion*, "Attentional control theory", doi:10.1037/1528-3542.7.2.336.) **Strong** as theory, with mixed later tests.
- Anxiety goes with lower working memory performance, about g ≈ −0.33 across 177 samples. (Moran 2016, *Psychological Bulletin*, doi:10.1037/bul0000051.) **Moderate**: figure from a citing paper; correlational.
- Pressure hurt people with high working memory on the problems that needed working memory most. (Beilock & Carr 2005, *Psychological Science*, doi:10.1111/j.0956-7976.2005.00789.x.) **Moderate.**
- Stress just before or during learning impaired memory. Stress just before or during recall impaired memory, more for emotional material. (Shields, Sazma, McCullough & Yonelinas 2017, *Psychological Bulletin*, 113 studies, doi:10.1037/bul0000100; abstract read in the original.) **Strong.**
  - This directly supports the skill's "nothing new under 30 minutes" rule.
- Short interventions:
  - Ten minutes of writing about test worries raised exam scores in anxious students. (Ramirez & Beilock 2011, *Science*, doi:10.1126/science.1199427.) A later college-class study found no effect. **Weak to moderate.**
  - Telling people that arousal helps performance raised GRE math scores, in the lab and on the real test. (Jamieson, Mendes, Blackstock & Schmader 2010, *J. Experimental Social Psychology*, doi:10.1016/j.jesp.2009.08.015.) **Moderate.**
- What it means: a stressed reader has less working memory than usual. Shorter replies, fewer choices and no new material are not just style choices; they match the evidence. The "reassurance line" could be a reappraisal line ("A fast heartbeat is your body getting ready").

### 2.7 How people read on screens

- On a test website, a concise version scored 58% better on usability, a scannable version 47%, and both plus an objective tone 124%. Measures included task time, errors and memory. (Morkes & Nielsen 1997, NN/g, https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/.) **Moderate**: one 51-person study, old, but large effects.
- Without formatting, eyes follow an "F": the first lines and the first words of each line get the attention. The fix is to put the key point first, use clear headings, bold key words, and use lists. (Pernice 2017, NN/g, https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/.) **Moderate** (eyetracking).
- The most effective scanning pattern is "layer-cake": eyes jump between headings, then read under the one needed. Good headings make it possible. (Pernice 2019, NN/g, https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/.) **Moderate.**
- **Chatbots specifically.** In a 9-person study of 8 site chatbots, users wanted the direct answer first. Long answers overwhelmed them. Streaming a long answer made it worse. Formatting helped, but did not rescue an answer that was simply too long. Recommendation: a "truncated pyramid": the essential answer, then follow-up prompts for more. Paragraphs of 2–3 sentences. (Rosala, Kenderova & Kohler 2026, NN/g, "Less chat, more answer", https://www.nngroup.com/articles/less-chat-more-answer/.) **Moderate**: small qualitative study, but chat-specific.
- Users of ChatGPT often spent extra turns asking it to shorten or expand answers ("accordion editing"). Default answers ran longer than wanted. (Gibbons, Mugunthan & Nielsen 2023, NN/g, https://www.nngroup.com/articles/accordion-editing-apple-picking/.) **Weak to moderate** (8 people).
- Reading speed: adults read English non-fiction silently at about 238 words per minute and aloud at about 183. (Brysbaert 2019, *J. Memory and Language*, meta-analysis of 190 studies, doi:10.1016/j.jml.2019.104047.) **Strong.**
  - So 250 words is about one minute of reading. A 30-second spoken answer is about 75–90 words at most.

### 2.8 Plain-language standards

- **GOV.UK:** "Try to split up sentences that are over 25 words long." Paragraphs of at most 5 sentences. Plain English is mandatory, and more expert readers prefer it more, not less. (GOV.UK, "Use clear language", https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/.) **Weak to moderate** (official guidance, built on user research).
- The often-repeated figures ("14-word sentences: 90% understood; 43 words: under 10%") trace back to a writing consultant, not a primary study. (GOV.UK blog 2014, https://insidegovuk.blog.gov.uk/2014/08/04/sentence-length-why-25-words-is-our-limit/.) **Weak.** Don't rely on them.
- **US Army AR 25-50** (10 Oct 2020, admin. revision 4 Oct 2024), para 1-38: Army writing should be "understood by the reader in a single rapid reading". Its two essential requirements are the main point at the beginning ("bottom line up front") and active voice. Para 1-39: average sentence about 15 words; paragraphs usually no more than 10 lines. (https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN32225-AR_25-50-003-WEB-6.pdf; read in a copy of the official PDF.) **Weak to moderate** (official standard, not an experiment).
  - Note: BLUF here is one bottom line per document, and "15 words" is an average sentence length, not a per-bullet cap.
- Federal Plain Language Guidelines: I could not reach the specific guidance pages on digital.gov (see section 5).

### 2.9 One question at a time

- A "double-barreled" question (one question asking about two things) lowered measurement quality in two randomized experiments: the versions did not measure the same thing, and a single-stimulus version was more valid. (Menold 2020, *Journal of Official Statistics*, doi:10.2478/jos-2020-0041.) **Moderate.** This is about one question with two parts, a close cousin of two questions at the end of one reply.
- Choice overload: across 50 experiments the average effect of more options was about zero. (Scheibehenne, Greifeneder & Todd 2010, *J. Consumer Research*, doi:10.1086/651235.) But overload becomes likely when the task is hard, preferences are unclear, and the person wants to minimize effort. (Chernev, Böckenholt & Goodman 2015, *J. Consumer Psychology*, doi:10.1016/j.jcps.2014.08.002.) **Moderate.** A stressed interviewee fits all three conditions.
- Hick's law (choice time grows with the log of the number of options) comes from simple reaction-time tasks. Practice and familiarity flatten it. (Hick 1952, *QJEP*, doi:10.1080/17470215208416600; Proctor & Schneider 2018, *QJEP*, doi:10.1080/17470218.2017.1322622.) **Weak** as a guide for chat menus. Don't cite it as proof.
- A chatbot survey that asked one question per turn got less "satisficing" (lazy answering) than a web form. (Kim, Lee & Gweon 2019, CHI, doi:10.1145/3290605.3300316.) A later study found no such advantage. **Weak.**
- What it means: no study tests "two offers at the end of an AI reply" directly. Converging evidence (double-barreled questions, overload under difficulty, stress cutting working memory) supports one question per turn. It also matches the rule Thelyv already settled in AGENTS.md.

### 2.10 First-party AI vendor guidance

- **Anthropic** (https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices):
  - Say what to do, not what not to do.
  - Explain why a rule matters; the model generalizes from the reason.
  - Examples are "one of the most reliable ways" to steer format, tone and structure.
  - The prompt's own formatting style leaks into the output.
  - Its sample prose prompt warns against "a series of overly short bullet points".
- **Anthropic, Opus 5** (https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5): default replies run longer than earlier models. Lowering effort does not reliably shorten them. Ask for brevity explicitly, and repeat a short reminder near the end of a long prompt.
- **OpenAI GPT-5 guide** (https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide; marked archived):
  - A `verbosity` setting, plus natural-language overrides in the prompt.
  - Markdown-following can fade in long conversations; restating the instruction every 3–5 user messages kept it steady.
- **Google** (https://aistudio.google.com/docs/prompting-strategies):
  - State the format you want.
  - Always include few-shot examples; clear examples can replace instructions.
  - Gemini 3 defaults to direct answers.
- **Length-following research:** 26 models tested on length instructions mostly followed short limits but were unreliable overall. (Zhang et al. 2025, LIFEBench, arXiv:2505.16234.) **Moderate.** Counting words is hard for these models.
- What it means: the fix is prompt text, so write it in the form models follow best. Use positive rules with reasons, limits in countable units (ideas, sentences, items), and a short example reply for each time bucket.

---

## 3. Verdicts on the user's four ideas

| Idea | Verdict | Why | Main sources |
|---|---|---|---|
| Menu & expand (outline, stop, expand the chosen number) | **Partly supported** | Segmenting and learner pacing help. Learner control alone adds almost nothing, helps experts more than novices, and costs extra turns. A menu without content delays the answer users want first. Works best as "answer first, then a short menu". | Rey 2019; Karich 2014; Scheiter & Gerjets 2007; Nielsen 2006; Rosala 2026 |
| BLUF: bold 1–2 sentence summary at the top of each section | **Supported per reply; partly per section** | Front-loading and signaling are well supported. AR 25-50 means one bottom line per message. Bold summaries on every section dilute the signal and add length. | AR 25-50 §1-38; Pernice 2017; Lorch 1989; Schneider 2018 |
| Tables instead of dense prose | **Partly supported** | Tables suit lookup and comparison (X vs Y, a day plan). They don't carry cause-and-effect explanations well, and wide tables break on phones. Direct evidence on tables vs prose for understanding is thin. | Vessey 1991 (cognitive fit; abstract only); Morkes & Nielsen 1997 |
| Strict bullet limits (max 15 words, no fluff) | **"No fluff": supported. "15 words": not supported as a hard rule** | Cutting filler is among the best-supported findings, especially under time limits. The 15-word figure is an average sentence target, not a tested cap. Very short bullets drop the "because" links people need to understand. Models also can't count words reliably. | Rey 2012; Morkes & Nielsen 1997; AR 25-50 §1-39; GOV.UK; LIFEBench 2025 |

---

## 4. What this means for thelyv-interview-mode

Recommendations only. Section names refer to the current `SKILL.md`.

### 4.1 "Rules for every reply"

1. **Answer first.** The first line of each reply is its bottom line: the answer, or what this reply gives. No greeting, no restating the question. (BLUF, F-pattern, chatbot study.)
2. **One chunk per reply.** At most about 4 new ideas. State the cap in ideas or items, not words. Keep the existing "about 4 new ideas" rule and apply it per reply.
3. **Length ceilings per reply**, as a guide for the AI, in countable units:
   - Under 30 minutes: about 250 words for the whole pack (about one minute of reading).
   - A few hours: about 250–300 words per reply.
   - 1 day or more: about 300–400 words per reply. Longer material is split across replies.
4. **Sentences:** average about 15 words; split anything over 25. Paragraphs of 2–3 sentences. (AR 25-50, GOV.UK, NN/g.)
5. **Bullets:** use them for separate items (points, steps, questions). Use a short sentence with "because" or "so" when the link between ideas is the point. Don't set a per-bullet word cap.
6. **Bold:** only the 1–3 terms or lines the user must remember from this reply.
7. **Tables:** only for comparisons and the day-by-day plan. At most 3 columns and short cells, so they fit a phone screen.
8. **Explain the reason inside the rule** (for example, "short, because a stressed reader has less working memory"). Vendors report this helps the model generalize.
9. **Add one short example reply per time bucket** to the skill. Vendors call examples the most reliable way to set format. Keep each example short, since the prompt's style leaks into the output.

### 4.2 Order inside a reply

1. Bottom line (one sentence).
2. Basic only: the 2–4 key terms, each with a few plain words (pre-training).
3. Concrete example, then the rule (already in the skill; supported for novices).
4. The content chunk.
5. One question, or one clear next step. Then stop.

### 4.3 When to stop and wait

1. Stop after any question, and after any "try it first" prompt. Never add the answer or the next section below it.
2. In a mock round, keep the existing rule: one question, wait, short feedback.
3. Don't run ahead to the next section "to save time". With 30 minutes left, give everything needed in one reply instead (see 4.5).

### 4.4 Questions per turn

1. **At most one question at the end of a reply.** It can have 2–4 options through the question tool. Combinations get their own option (already the AGENTS.md rule).
2. **Merge the end-of-pack offers into one question**, for example "Quiz me now (Recommended) / Save and stop / Stop". Saving is then one option of a single decision, not a second question.
3. **Offer saving only at the end:** after the mock round, or when the user says they're done. Not after every pack.
4. Section 1's level + time question is two short, independent, numbered questions asked together. That is a settled design, and it is not a double-barreled question. Keep it as the one deliberate exception, but make sure the topic question never shares that message.

### 4.5 The per-time-left packs (section 3 of the skill)

**Less than 30 minutes**
1. Keep "nothing new or deep". Stress around learning and recall hurts memory (Shields 2017).
2. Consider 4 must-know points instead of 5, to match the 4-idea rule and the reduced working memory under stress. Moderate evidence; the user's call.
3. Each 30-second answer: about 60–80 words, 3–4 short sentences.
4. Deliver the whole pack in one reply with no menu. Extra round trips cost minutes, and rereading is fine at very short delays (Roediger & Karpicke 2006).
5. Suggest saying each answer aloud once (production effect). Don't make "quiz me" the Recommended first step: at a few minutes' delay, testing without feedback did not beat rereading.
6. Turn the reassurance line into a reappraisal line (Jamieson 2010). Keep it to one line.

**A few hours**
1. First reply: the bottom line plus at most 4 key ideas (the core of the "one-page summary"), within about 300 words.
2. Then the likely questions one per turn: try first, then the model answer with brief feedback. Retrieval with feedback is well supported. The exact payoff over a gap of a few hours is not measured (see section 5).
3. Allow a "just show me" option, so a user who freezes isn't stuck. Failure is useful for learning, but its effect on anxious people right before an interview is unknown.

**1 to 3 days, and a week or more**
1. This is where menu-and-expand fits. Open with a short map: at most 7 numbered sections, each with a one-sentence takeaway (real content, not titles). Then one section per reply.
2. For Basic, Thelyv picks the order and the user says "next". For Intermediate and Advanced, the user picks from the map.
3. Put the day-by-day plan in a small table (Day | Do | About how long). Space reviews at about 20–40% of the time left (for 7 days, review after about 1.5–3 days).
4. Make retrieval practice the core of every day after the first. It is the best-supported method, and it may protect recall under stress (Smith 2016).

### 4.6 Formatting by level

| Level | Shape |
|---|---|
| Basic | Key terms first, worked example first, full model answers, Thelyv picks the order, fewer choices. |
| Intermediate | Short model answers, try first on likely questions, a menu from the map. |
| Advanced | Terse; skip definitions they know; try first; harder "why" follow-ups; a menu. More guidance here can hurt (expertise reversal). |

Time left overrides level for length: under 30 minutes, even Advanced gets the short pack.

---

## 5. Open questions and weak evidence

- **No study tests chat replies directly.** Most learning evidence comes from lessons, animations, lists and prose passages. Applying it to AI chat replies is my inference.
- **Very short windows.** I found no study of retrieval practice versus reading 10–30 minutes before a real, high-stakes event, with feedback.
- **Trying first under stress.** Failed attempts help learning in calm lab settings. Whether failing right before an interview raises anxiety enough to cancel the gain is untested, as far as I found.
- **Effect sizes I could not read in the original:** Karich 2014 (g ≈ 0.05), Schneider 2018 (g ≈ 0.53 / 0.33), Moran 2016 (g ≈ −0.33), Scheibehenne 2010 (D ≈ 0.02). Directions are consistent across sources; exact numbers are unconfirmed.
- **Tables versus prose for understanding:** Vessey's cognitive-fit theory is about graphs vs tables for decision tasks. I read only the abstract and citing papers. I found no direct test of tables vs prose for learning a concept.
- **Sentence-length comprehension figures** (14 words = 90%) are not traceable to a primary study.
- **Federal Plain Language Guidelines:** the digital.gov pages I reached held no numeric guidance. I used GOV.UK and AR 25-50 instead.
- **Two separate questions in one message** (as in section 1 of the skill) vs one question per message: no direct evidence either way; the double-barreled research covers one question with two parts.
- **Vendor guidance is about models, not readers.** It tells us how to get the format; it doesn't tell us which format readers understand best.
- **Production effect** is shown mostly with word lists. Its size for spoken interview answers is unknown.
- **Length ceilings in section 4** are my synthesis (reading speed + 4-chunk limit + chatbot findings), not measured optima. Worth checking in the dogfooding rounds.

---

## 6. Sources

Cognitive load and working memory
- Cowan, N. (2001). The magical number 4 in short-term memory. *Behavioral and Brain Sciences*, 24(1), 87–114. doi:10.1017/S0140525X01003922
- Miller, G. A. (1956). The magical number seven, plus or minus two. *Psychological Review*, 63(2), 81–97. doi:10.1037/h0043158
- Sweller, J. (1988). Cognitive load during problem solving. *Cognitive Science*, 12(2), 257–285. doi:10.1207/s15516709cog1202_4
- Sweller, J., van Merriënboer, J., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. *Educational Psychology Review*, 31, 261–292. doi:10.1007/s10648-019-09465-5

Multimedia learning, examples, learner control
- Mayer, R. E., & Moreno, R. (2003). Nine ways to reduce cognitive load in multimedia learning. *Educational Psychologist*, 38(1), 43–52. doi:10.1207/S15326985EP3801_6
- Mayer, R. E., Mathias, A., & Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training. *J. Experimental Psychology: Applied*, 8(3), 147–154. doi:10.1037/1076-898X.8.3.147
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. *Educational Research Review*, 7(3), 216–237. doi:10.1016/j.edurev.2012.05.003
- Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review*, 31, 389–419. doi:10.1007/s10648-018-9456-4
- Schneider, S., Beege, M., Nebel, S., & Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. *Educational Research Review*, 23, 1–24. doi:10.1016/j.edurev.2017.11.001
- Lorch, R. F. (1989). Text-signaling devices and their effects on reading and memory processes. *Educational Psychology Review*, 1(3), 209–234. doi:10.1007/BF01320135
- Atkinson, R. K., Derry, S. J., Renkl, A., & Wortham, D. (2000). Learning from examples. *Review of Educational Research*, 70(2), 181–214. doi:10.3102/00346543070002181
- Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23–31. doi:10.1207/S15326985EP3801_4
- Karich, A. C., Burns, M. K., & Maki, K. E. (2014). Updated meta-analysis of learner control within educational technology. *Review of Educational Research*, 84(3), 392–410. doi:10.3102/0034654314526064
- Scheiter, K., & Gerjets, P. (2007). Learner control in hypermedia environments. *Educational Psychology Review*, 19, 285–307. doi:10.1007/s10648-007-9046-3

Retrieval, spacing, production
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*, 14(1), 4–58. doi:10.1177/1529100612453266
- Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. *JEP: Learning, Memory, and Cognition*, 35(4), 989–998. doi:10.1037/a0015729
- Smith, A. M., Floerke, V. A., & Thomas, A. K. (2016). Retrieval practice protects memory against acute stress. *Science*, 354(6315), 1046–1048. doi:10.1126/science.aah5067
- Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science*, 19(11), 1095–1102. doi:10.1111/j.1467-9280.2008.02209.x
- MacLeod, C. M., Gopie, N., Hourihan, K. L., Neary, K. R., & Ozubko, J. D. (2010). The production effect: Delineation of a phenomenon. *JEP: Learning, Memory, and Cognition*, 36(3), 671–685. doi:10.1037/a0018785

Stress and anxiety
- Eysenck, M. W., Derakshan, N., Santos, R., & Calvo, M. G. (2007). Anxiety and cognitive performance: Attentional control theory. *Emotion*, 7(2), 336–353. doi:10.1037/1528-3542.7.2.336
- Moran, T. P. (2016). Anxiety and working memory capacity: A meta-analysis and narrative review. *Psychological Bulletin*, 142(8), 831–864. doi:10.1037/bul0000051
- Beilock, S. L., & Carr, T. H. (2005). When high-powered people fail. *Psychological Science*, 16(2), 101–105. doi:10.1111/j.0956-7976.2005.00789.x
- Shields, G. S., Sazma, M. A., McCullough, A. M., & Yonelinas, A. P. (2017). The effects of acute stress on episodic memory. *Psychological Bulletin*, 143(6), 636–675. doi:10.1037/bul0000100
- Ramirez, G., & Beilock, S. L. (2011). Writing about testing worries boosts exam performance in the classroom. *Science*, 331(6014), 211–213. doi:10.1126/science.1199427
- Jamieson, J. P., Mendes, W. B., Blackstock, E., & Schmader, T. (2010). Turning the knots in your stomach into bows. *J. Experimental Social Psychology*, 46(1), 208–212. doi:10.1016/j.jesp.2009.08.015

Reading, usability, plain language
- Brysbaert, M. (2019). How many words do we read per minute? *J. Memory and Language*, 109, 104047. doi:10.1016/j.jml.2019.104047
- Morkes, J., & Nielsen, J. (1997). Concise, SCANNABLE, and objective: How to write for the web. NN/g. https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- Pernice, K. (2017). F-shaped pattern of reading on the web: Misunderstood, but still relevant. NN/g. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Pernice, K. (2019). Text scanning patterns: Eyetracking evidence. NN/g. https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/
- Nielsen, J. (2006). Progressive disclosure. NN/g. https://www.nngroup.com/articles/progressive-disclosure/
- Rosala, M., Kenderova, G., & Kohler, T. (2026). Less chat, more answer: Site AI chatbots need to get to the point. NN/g. https://www.nngroup.com/articles/less-chat-more-answer/
- Gibbons, S., Mugunthan, T., & Nielsen, J. (2023). Accordion editing and apple picking. NN/g. https://www.nngroup.com/articles/accordion-editing-apple-picking/
- Mugunthan, T. (2024). Response outlining with generative-AI chatbots. NN/g. https://www.nngroup.com/articles/response-outlining/
- GOV.UK. Use clear language (Writing to GOV.UK standards). https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/
- GOV.UK blog (2014). Sentence length: why 25 words is our limit. https://insidegovuk.blog.gov.uk/2014/08/04/sentence-length-why-25-words-is-our-limit/
- Headquarters, Department of the Army (2020, admin. rev. 2024). AR 25-50, Preparing and Managing Correspondence, paras 1-38 and 1-39. https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN32225-AR_25-50-003-WEB-6.pdf

Questions and choices
- Menold, N. (2020). Double barreled questions: An analysis of the similarity of elements and effects on measurement quality. *Journal of Official Statistics*, 36(4), 855–886. doi:10.2478/jos-2020-0041
- Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). Can there ever be too many options? *J. Consumer Research*, 37(3), 409–425. doi:10.1086/651235
- Chernev, A., Böckenholt, U., & Goodman, J. (2015). Choice overload: A conceptual review and meta-analysis. *J. Consumer Psychology*, 25(2), 333–358. doi:10.1016/j.jcps.2014.08.002
- Hick, W. E. (1952). On the rate of gain of information. *QJEP*, 4(1), 11–26. doi:10.1080/17470215208416600
- Proctor, R. W., & Schneider, D. W. (2018). Hick's law for choice reaction time: A review. *QJEP*, 71(6), 1281–1299. doi:10.1080/17470218.2017.1322622
- Kim, S., Lee, J., & Gweon, G. (2019). Comparing data from chatbot and web surveys. *CHI '19*. doi:10.1145/3290605.3300316
- Vessey, I. (1991). Cognitive fit: A theory-based analysis of the graphs versus tables literature. *Decision Sciences*, 22(2), 219–240. doi:10.1111/j.1540-5915.1991.tb00344.x

AI vendor guidance and model behaviour
- Anthropic. Prompting best practices. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Anthropic. Prompting Claude Opus 5. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5
- OpenAI. GPT-5 prompting guide (archived). https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide
- Google. Prompt design strategies. https://aistudio.google.com/docs/prompting-strategies
- Zhang, W., et al. (2025). LIFEBench: Evaluating length instruction following in large language models. arXiv:2505.16234. https://arxiv.org/abs/2505.16234
