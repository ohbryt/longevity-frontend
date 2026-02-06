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

for (const file of files) {
  fs.copyFileSync(path.join(SOURCE, file), path.join(DEST, file));
}

console.log(`Copied ${files.length} content files to frontend/content/`);
