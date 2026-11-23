# site-generator-speed-01-run-20261122

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/Nengyara2017/site-generator-speed-01-run-20261122/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/Nengyara2017/site-generator-speed-01-run-20261122/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A dependency-free, fast drop-in replacement for makefun-site 1.0.0 that builds exactly the same output tree — every page's index.html, the index and tag pages, build-report.txt, and each static file — byte for byte, in about a third of the time. It uses a single-pass Markdown renderer with no token allocation, and cached excerpts, word counts, and tag slugs.

## Run it

```sh
MAKEFUN_INPUT_DIR=./practice/input MAKEFUN_OUTPUT_DIR=./out node main.ts
```

`main.ts` reads every case from `cases.json` in the input directory, answers each one with `run()` from `solve.js`, and writes `answers.json` to the output directory. It needs Node 22 or later and nothing else — no dependencies, no network, no build step.

## Layout

- `solve.js` — the generator. `run(input)` takes one generated site and returns the output tree as a JSON object of path to file text.
- `main.ts` — the program the harness runs. It reads the cases, answers each with `run`, and writes the answers out. It also turns V8's incremental marking off before importing `solve.js`, the same flag tuning the house baseline uses.

<sub>Entered on [make.fun](https://make.fun/?ref=1wdmergd&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
