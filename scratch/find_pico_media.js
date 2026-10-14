const fs = require('fs');
const html = fs.readFileSync('C:/Users/SKILLVERI INTERNAL 3/.gemini/antigravity-ide/brain/011e76f0-763b-4a59-babc-b61c78f6fdb9/.system_generated/steps/2847/content.md', 'utf8');

const regex = /https?:\/\/[^\s"\'<>]+\.(?:png|gif|mp4|webm|webp)/gi;
const matches = [...new Set(html.match(regex) || [])];
console.log('Media URLs found:');
matches.forEach(m => console.log('-', m));
