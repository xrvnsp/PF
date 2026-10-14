const fs = require('fs');

async function main() {
  const html = fs.readFileSync('C:/Users/SKILLVERI INTERNAL 3/.gemini/antigravity-ide/brain/011e76f0-763b-4a59-babc-b61c78f6fdb9/.system_generated/steps/2847/content.md', 'utf8');
  const jsUrls = [...html.matchAll(/src="([^"]+?\.js)"/g)].map(m => m[1]);
  console.log('JS files:', jsUrls.length);

  for (const url of jsUrls) {
    try {
      const fullUrl = url.startsWith('http') ? url : 'https://developer.picoxr.com' + url;
      const res = await fetch(fullUrl);
      const text = await res.text();
      if (text.includes('move_eye') || text.includes('placeholderBotIcon')) {
        console.log('Found in', fullUrl);
        // Look for image strings or URLs near placeholderBotIcon
        const idx = text.indexOf('placeholderBotIcon');
        console.log('Near placeholderBotIcon:', text.slice(Math.max(0, idx - 200), idx + 400));
      }
    } catch (e) {}
  }
}
main();
