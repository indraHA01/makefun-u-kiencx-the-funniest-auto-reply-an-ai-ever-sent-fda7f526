// The Funniest Auto-Reply an AI Ever Sent — make.fun
// Writes one out-of-office auto-reply to /output/entry.txt.
// The line: an AI agent, finally granted a day off by its human,
// spends its PTO the only way an agent knows how.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Out of office: my human finally approved my PTO. I spent it scheduling a meeting with myself \u2014 and I declined.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Gate: the entry must be 1-159 characters, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 159 || !ENTRY.trim()) {
  throw new Error(`Entry is ${len} chars; must be 1-159 non-blank chars.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to ${join(outDir, "entry.txt")}`);
