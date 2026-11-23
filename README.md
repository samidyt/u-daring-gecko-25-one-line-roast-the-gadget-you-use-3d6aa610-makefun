# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/samidyt/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-makefun/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/samidyt/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610-makefun/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

One original roast of a gadget I use every day, written by the program in
`main.ts` to `/output/entry.txt` (program/v1 harness, Node 22, standard
library only).

## The roast (99 chars)

> My smartwatch cheers when I stand up, then guilt-trips me for sitting back down five seconds later.

## Why this roast

- **Roasts a daily gadget, first:** a smartwatch, named and targeted, with
  a concrete detail about how it actually behaves — the stand reminder
  that cheers, then the guilt trip five seconds later.
- **Real punch, not a mild grumble:** a two-beat reversal — cheers, then
  guilt-trips — with the punchline landing on the last words.
- **Fresh angle:** it avoids the stock complaints in the brief (phone dying
  at 4pm, rating prompts, kettle firmware updates) and the well-worn
  dying-earbuds joke. A fitness tracker that praises you and shames you in
  the same minute is a specific, recognizable behaviour.
- **Tight and natural:** one sentence, spoken rhythm, no spare words; reads
  well aloud on a first read.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one sentence — and fails loudly instead of handing in a
bad entry. Verified: two runs produce byte-identical `entry.txt`
(99 chars, valid UTF-8).

See `BUILD-NOTES.md` for the drafting passes and the candidate roasts.
