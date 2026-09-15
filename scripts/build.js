// Copies the static site into dist/ for hosts that expect a build step (e.g. Hostinger's GitHub deploy).
// No dependencies — the site itself needs no compilation.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const entries = ['index.html', 'style.css', 'script.js', 'assets'];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const entry of entries) {
  const from = path.join(root, entry);
  if (!fs.existsSync(from)) {
    console.error(`Missing required file: ${entry}`);
    process.exit(1);
  }
  fs.cpSync(from, path.join(dist, entry), { recursive: true });
}

console.log(`Built static site into ${path.relative(root, dist)}/ (${entries.join(', ')})`);
