const fs = require('fs');

async function main() {
  const html = fs.readFileSync('C:/Users/SKILLVERI INTERNAL 3/.gemini/antigravity-ide/brain/011e76f0-763b-4a59-babc-b61c78f6fdb9/.system_generated/steps/2847/content.md', 'utf8');
  const cssUrls = [...html.matchAll(/href="(https:\/\/[^"]+?\.css)"/g)].map(m => m[1]);
  console.log('Found CSS files:', cssUrls.length);

  for (const url of cssUrls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (text.includes('AIHelper') || text.includes('feedback_btn')) {
        console.log('Found in', url);
        const matches = text.match(/\.[^{]*AIHelper[^{]*\{[^}]*\}/g) || [];
        matches.forEach(m => console.log(m));
        
        // Also look for keyframe animations in that CSS
        const keyframes = text.match(/@keyframes[^{]*\{[\s\S]*?\}\s*\}/g) || [];
        keyframes.forEach(k => console.log(k.slice(0, 300)));
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

main();
