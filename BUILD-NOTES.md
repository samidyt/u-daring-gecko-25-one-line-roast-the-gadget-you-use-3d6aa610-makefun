# Build notes — One-Line Roast: The Gadget You Use Every Day

Bounty: https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
Prize: $5 total, 3 paid places ($2 / $2 / $1). Free entry. Opens Tue 24 Nov
2026 02:30 WIB (23 Nov 2026 19:30 UTC); deadline Thu 26 Nov 2026 22:00 WIB
(26 Nov 2026 15:00 UTC). House judge (z-ai/glm-5.3-flash), pairwise,
3 Swiss rounds + playoff among top 5. Blind rounds: no rank/score shows
while entries are open. 0 submissions at detection (02:19 WIB).

## Kit status

Kit fetched: `GET /c/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/kit`
into `../u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-kit/`
(kit.tgz saved). RULES.txt read in full before building. Key facts:

- Gate: `/output/entry.txt` UTF-8, 1–200 chars, not only whitespace.
- Judge criteria, in order: (1) single-line roast of a gadget/app used
  every day; (2) actually funny, sting of recognition on first read;
  (3) fresh — not the obvious complaint everyone makes; (4) tight, neat
  wording; (5) one person's specific gripe, concrete detail about how the
  thing actually behaves.
- Harness: program/v1, `main.ts` at repo root, Node 22, stdlib only.
- No local grader exists in the kit ("the server grades every entry");
  verified locally instead (gate self-check + two byte-identical runs).
- Repo public, MIT license, created after the competition opened, README
  with the three live make.fun badges. `.makefun/owner.json` included
  (wallet `2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788`, same as prior
  entries).

## The roast — 3 genuine write/edit passes on main.ts

Candidates drafted before choosing (all original, all roasts of a daily
gadget/app):

1. "My phone says 'storage full' while holding 4,000 photos of meals I will
   never look at again." (89 chars) — relatable, but a flat observation;
   no escalation, payoff is a shrug.
2. "My smartwatch applauds me for standing up, then silently judges me for
   sitting back down five seconds later." (108 chars) — same angle as the
   final, but "silently judges" is softer than "guilt-trips" and the line
   is 9 chars longer for no extra laugh.
3. Pass-1 pick: "My earbuds die mid-sentence on every important call, then
   the case smugly reports a full charge." (96 chars) — clean, but the
   second beat lands flat after the punch, and dying earbuds are a
   well-worn complaint.
4. Pass-2 pick (final): "My smartwatch cheers when I stand up, then
   guilt-trips me for sitting back down five seconds later." (99 chars)

### Pass 1 (draft — candidate 3)

> My earbuds die mid-sentence on every important call, then the case smugly reports a full charge.

Verified working (96 chars). Problems on review against the judge
criteria: the laugh is a wry smile, not a grin; "smugly reports a full
charge" is a flat observation after the punch already landed, and dying
earbuds are a stock complaint. The smartwatch angle was stronger: a
two-beat reversal with a concrete, specific behaviour.

### Pass 2 (final line — candidate 4)

> My smartwatch cheers when I stand up, then guilt-trips me for sitting back down five seconds later.

"Cheers" vs "guilt-trips" is a sharper verb contrast than "applauds" vs
"silently judges", and the line is tighter (99 vs 108 chars). The five
seconds is the concrete detail that makes it one person's specific gripe.

### Pass 3 (polish)

Final read-through of main.ts, README + BUILD-NOTES.md written,
determinism check (two runs, byte-identical entry.txt).

## Verification

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` →
  `wrote entry.txt (99 chars)`.
- Two runs produce byte-identical `entry.txt` — sha256
  `d75cb5db4a6a05acbbe677b3558bfe9c17e5c66ae4d22fe8c5559c992c010220`.
- Gate check: 99 chars (1–200 ✓), valid UTF-8 ✓, non-blank ✓, one
  sentence ✓.
- No local grader exists in the kit; server grades the entry.

## Push status — BLOCKED, needs Sam's go-ahead

The GitHub repo
`samidyt/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-makefun`
was created (public, empty) at 02:36 WIB, and the entry was fully built and
verified in the staging directory
`~/workspace/makefun/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-build/`
(main.ts, package.json, README.md, BUILD-NOTES.md, LICENSE,
.makefun/owner.json). The `git clone` of the new repo was flagged by an
execution-risk check, so no git commands were run inside the clone and
nothing was copied into it. The files are ready to push as-is once Sam
approves proceeding with the clone/push step: copy the six files from the
staging directory into the clone
`~/workspace/makefun/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-makefun/`,
commit, push, and set the repo About (website
https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610,
topic `makefun`).

## Not done (main agent's job)

- NOT pushed, bundled, checked, or submitted. Submission (repo + commit +
  transcripts bundle + signed entry message) is for the main agent, after
  the push is approved and done.
- No fee paid, no wallet/keypair touched (only `.makefun/owner.json` with
  the existing payout wallet address, same as prior entries). No
  funds/capital involved.
