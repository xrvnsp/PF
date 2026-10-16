const esbuild = require('esbuild');
const path = require('path');

esbuild.buildSync({
  entryPoints: ['timeline-lanyards.jsx'],
  outfile: 'assets/timeline-lanyards.bundle.js',
  bundle: true,
  format: 'esm',
  minify: true,
  inject: [path.join(__dirname, 'react-shim.js')],
  loader: {
    '.css': 'text' // Or inject CSS
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});

console.log('✅ assets/timeline-lanyards.bundle.js built successfully!');
