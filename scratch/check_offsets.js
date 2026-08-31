const fs = require('fs');

const buf = fs.readFileSync('c:/Users/901969/Documents/SP Portfolio/assets/card.glb');
const jsonLen = buf.readUInt32LE(12);
const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
const gltf = JSON.parse(jsonStr);

console.log('Matrix translation of nodes:');
gltf.nodes.forEach(n => {
  if (n.matrix) {
    console.log(n.name, 'tx:', n.matrix[12], 'ty:', n.matrix[13], 'tz:', n.matrix[14]);
  }
});
