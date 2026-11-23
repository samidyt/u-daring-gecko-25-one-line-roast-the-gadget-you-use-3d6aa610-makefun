// One-Line Roast: The Gadget You Use Every Day — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one roast to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
//
// PASS 2 (final line) — the smartwatch angle: two-beat reversal (cheers
// me for standing, guilt-trips me for sitting back down five seconds
// later), punchline on the last words. Concrete, specific behaviour of a
// gadget used every day; avoids the brief's stock examples (phone dying at
// 4pm, rating prompts, kettle firmware updates) and the well-worn
// dying-earbuds complaint. Tight at 99 chars, one sentence, spoken rhythm.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My smartwatch cheers when I stand up, then guilt-trips me for sitting back down five seconds later.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end.
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
