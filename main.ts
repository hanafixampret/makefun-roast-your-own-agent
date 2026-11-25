import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my agent to roast itself. It read the docs, hedged for six paragraphs, and submitted a disclaimer instead.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
