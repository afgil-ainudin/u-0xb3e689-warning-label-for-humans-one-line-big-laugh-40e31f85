import { mkdirSync, writeFileSync } from "node:fs";

// One-line safety warning label for every human being.
// Written exactly as a printed product label: formal opener, then the
// twist lands in the last few words.
const ENTRY =
  "WARNING: This human will confidently explain things it learned five minutes ago. Keep away from microphones, group chats, and Thanksgiving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
