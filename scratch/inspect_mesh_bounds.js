const fs = require('fs');

const buf = fs.readFileSync('c:/Users/901969/Documents/SP Portfolio/assets/card.glb');
const jsonLen = buf.readUInt32LE(12);
const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
const gltf = JSON.parse(jsonStr);

// Print accessors for positions of each mesh primitive
gltf.meshes.forEach((m, idx) => {
  const posAccessorIdx = m.primitives[0].attributes.POSITION;
  const acc = gltf.accessors[posAccessorIdx];
  console.log(`Mesh ${idx} (${gltf.nodes[idx].name}): min=${acc.min}, max=${acc.max}`);
});
