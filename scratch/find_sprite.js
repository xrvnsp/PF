const fs = require('fs');

async function main() {
  const html = fs.readFileSync('C:/Users/SKILLVERI INTERNAL 3/.gemini/antigravity-ide/brain/011e76f0-763b-4a59-babc-b61c78f6fdb9/.system_generated/steps/2847/content.md', 'utf8');

  // Let's also fetch the CSS that contained AIHelper_icon__Q3UH8
  const cssUrls = [...html.matchAll(/href="(https:\/\/[^"]+?\.css)"/g)].map(m => m[1]);
  for (const url of cssUrls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (text.includes('AIHelper_icon__Q3UH8')) {
        console.log('CSS URL:', url);
        // Look for url(...) around AIHelper_icon
        const matches = text.match(/AIHelper[^{]*\{[^}]*\}/g) || [];
        matches.forEach(m => {
          if (m.includes('url(') || m.includes('background') || m.includes('content') || m.includes('icon')) {
            console.log(m);
          }
        });
      }
    } catch (e) {}
  }
}
main();
