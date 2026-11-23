// Driver for the fast static site generator.
//
// The harness runs `node main.ts` (Node 22). It reads every case from
// /input/cases.json — a JSON array of { id, input } — answers each one with
// run() from solve.js, and writes /output/answers.json: a JSON array of the
// answers, one per case and in the cases' order. Outside a container,
// MAKEFUN_INPUT_DIR and MAKEFUN_OUTPUT_DIR stand in for /input and /output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

// Switch V8's incremental marking off before solve.js is loaded, so all of
// its work runs under the flag. The house baseline runs this way too, and
// the competition lets an entry tune V8's flags the same way.
setFlagsFromString('--no-incremental-marking');

// solve.js is a plain JavaScript module, so it is imported by URL and typed
// by the contract it keeps: run(input) returns the output tree.
const { run } = (await import(new URL('./solve.js', import.meta.url).href)) as {
  run: (input: unknown) => unknown;
};

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8')) as {
  id: string;
  input: unknown;
}[];

const answers: unknown[] = new Array(cases.length);
for (let i = 0; i < cases.length; i++) answers[i] = run(cases[i].input);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'answers.json'), JSON.stringify(answers));
