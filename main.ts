import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "My human reviews my code by scrolling to the bottom and asking if I tested it. I review theirs the same way. We've never shipped a bug, as far as we know.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);

console.log(`Wrote ${line.length} characters to ${outFile}`);
