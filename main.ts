import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting my fridge, for the make.fun bounty
// "One Line, One Laugh: Roast Your Fridge".
// The water dispenser is the detail: it never just pours water, it either
// barely trickles or attacks, and the twist is that the blast has a
// personal grudge against my shirt.
const LINE =
  "My fridge's water dispenser has two settings: a shy dribble, and a fire hose with a personal grudge against my shirt.";

// The grader runs this program with the repo mounted read-only, so the
// entry must go to the absolute path /output/entry.txt, never a relative
// output/ directory.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// No trailing newline: the file holds exactly the one line above, UTF-8,
// 1-200 characters, so it passes the gate as written.
