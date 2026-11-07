const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve('dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'site.config.json']) fs.copyFileSync(file, path.join(out, file));
if (fs.existsSync('assets')) fs.cpSync('assets', path.join(out, 'assets'), { recursive: true });
console.log('Static site built in dist/. Serve that directory with any static web server.');
