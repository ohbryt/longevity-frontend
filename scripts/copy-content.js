const fs = require("fs");
const path = require("path");

const SOURCE = path.join(__dirname, "..", "..", "automation", "content_drafts");
const DEST = path.join(__dirname, "..", "content");

if (!fs.existsSync(SOURCE)) {
  console.log("No content_drafts directory found, skipping copy.");
  process.exit(0);
}

if (!fs.existsSync(DEST)) {
  fs.mkdirSync(DEST, { recursive: true });
}

const files = fs.readdirSync(SOURCE).filter((f) => f.endsWith(".json"));

let copied = 0;
let skipped = 0;

for (const file of files) {
  const srcPath = path.join(SOURCE, file);
  const destPath = path.join(DEST, file);

  try {
    const raw = fs.readFileSync(srcPath, "utf-8");
    const data = JSON.parse(raw);
    if (data?.status !== "ready_for_review") {
      skipped += 1;
      continue;
    }
    fs.copyFileSync(srcPath, destPath);
    copied += 1;
  } catch {
    // If a file is malformed, don't pollute the frontend content dir.
    skipped += 1;
  }
}

console.log(
  `Copied ${copied} ready content files to frontend/content/ (skipped ${skipped})`,
);
