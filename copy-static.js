const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else if (exists) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Copy static assets and models
const itemsToCopy = [
  'assets',
  'Quest3.glb',
  'vision_pro.glb',
  'QUEST3.png',
  'VisionPro.png',
  'favicon-16.png',
  'favicon-32.png',
  'favicon-180.png',
  'favicon-192.png',
  'favicon-512.png',
  'robots.txt',
  'sitemap.xml',
  'googlecdb25dfac705035b.html'
];

itemsToCopy.forEach((item) => {
  const src = path.join(__dirname, item);
  const dest = path.join(__dirname, 'dist', item);
  if (fs.existsSync(src)) {
    copyRecursiveSync(src, dest);
  }
});

console.log('✅ Static assets, resume.pdf, and 3D models copied to dist/');
