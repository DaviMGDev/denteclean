const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || '.');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end('Bad request'); return; }
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end('Forbidden'); return; }
  const target = file === root ? path.join(root, 'index.html') : file;
  fs.stat(target, (err, stat) => {
    const resolved = !err && stat.isDirectory() ? path.join(target, 'index.html') : target;
    fs.readFile(resolved, (readErr, body) => {
      if (readErr) { res.writeHead(404).end('Not found'); return; }
      res.writeHead(200, {'Content-Type': types[path.extname(resolved)] || 'application/octet-stream'}).end(body);
    });
  });
}).listen(Number(process.env.PORT) || 4173, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${Number(process.env.PORT) || 4173}`));
