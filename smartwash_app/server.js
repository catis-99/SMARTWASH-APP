const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist', 'smartwash_app');

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Internal Server Error');
    }
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // decode URI and prevent directory traversal
  const safePath = decodeURIComponent(req.url.split('?')[0]).replace(/\.+/g, '.');
  let filePath = path.join(distPath, safePath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(res, filePath);
    } else {
      // try with index.html if path is a directory
      const indexPath = path.join(distPath, 'index.html');
      fs.readFile(indexPath, (indexErr, data) => {
        if (indexErr) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`Serving folder: ${distPath}`);
});
