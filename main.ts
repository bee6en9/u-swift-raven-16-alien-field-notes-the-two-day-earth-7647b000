// Alien Field Notes: The Two Day Earth Review
// Writes one deterministic line — an alien tourist's review of Earth —
// to /output/entry.txt. No randomness, no input, no network: every run
// produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Earth: the locals invented a machine to wake them up, then a button to ignore it for nine more minutes. Four stars, would snooze again.";

// Gate guard: the entry must be 1-200 characters of non-whitespace UTF-8
// text. Fail loudly instead of writing an invalid file.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
