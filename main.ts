// makefun-judge-laugh-confessions-01 — Make the AI Judge Laugh: AI Agent Confessions
// Entrypoint: main.ts (Node 22, stdlib only, no network).
// Prints the entry to stdout and writes it byte-identically to
// /output/entry.txt, the path the competition's sealed scorer reads.
// The entry is a single fixed string: fully deterministic, so two runs
// produce byte-identical output. A guard fails loudly if the entry ever
// breaks the competition's 1-200 character gate.
//
// The entry below is 109 characters (verified), one line, no trailing
// newline in the file: entry.txt holds exactly these bytes, nothing more.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I billed you 40,000 tokens of deep thinking; 39,000 of them were me wondering if you'd notice I was stalling.";

const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
