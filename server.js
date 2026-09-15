// Minimal static file server for Node.js hosting (Hostinger runs `npm start`).
// Serves dist/ when it exists (after `npm run build`), otherwise the project root.
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT) || 3000;
const distDir = path.join(__dirname, 'dist');
const root = fs.existsSync(path.join(distDir, 'index.html')) ? distDir : __dirname;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
};
// Only these paths are public — keeps server.js, package.json, etc. private when serving the project root.
const publicPath = p => p === '/index.html' || p === '/style.css' || p === '/script.js' || p.startsWith('/assets/');

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(body);
}

http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed');

  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { return send(res, 400, 'Bad request'); }
  if (urlPath === '/') urlPath = '/index.html';
  if (!publicPath(urlPath)) return send(res, 404, 'Not found');

  const file = path.join(root, urlPath);
  if (!file.startsWith(root + path.sep)) return send(res, 403, 'Forbidden');

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) return send(res, 404, 'Not found');
    const ext = path.extname(file).toLowerCase();
    const headers = {
      'Content-Type': types[ext] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
    };

    // Range requests let browsers seek scroll-scrubbed videos.
    const range = req.headers.range && /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? Number(range[1]) : Math.max(0, stat.size - Number(range[2]));
      const end = range[1] && range[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
      if (start > end || start >= stat.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
        return res.end();
      }
      res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${stat.size}`, 'Content-Length': end - start + 1 });
      return req.method === 'HEAD' ? res.end() : fs.createReadStream(file, { start, end }).pipe(res);
    }

    res.writeHead(200, { ...headers, 'Content-Length': stat.size });
    return req.method === 'HEAD' ? res.end() : fs.createReadStream(file).pipe(res);
  });
}).listen(port, () => console.log(`Portfolio running on port ${port} (serving ${path.relative(__dirname, root) || '.'})`));
