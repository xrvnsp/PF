const fs = require('fs');

const buf = fs.readFileSync('c:/Users/901969/Documents/SP Portfolio/assets/card.glb');
const jsonLen = buf.readUInt32LE(12);
const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
const gltf = JSON.parse(jsonStr);

// Let's compute exact vertices of clip (the hook ring at the top)
const binBuf = buf.slice(20 + jsonLen + 8);

// Mesh 1 is clip
const clipPrim = gltf.meshes[1].primitives[0];
const posAccessor = gltf.accessors[clipPrim.attributes.POSITION];
const bufferView = gltf.bufferViews[posAccessor.bufferView];

const byteOffset = (bufferView.byteOffset || 0) + (posAccessor.byteOffset || 0);
const count = posAccessor.count;
const floats = new Float32Array(binBuf.buffer, binBuf.byteOffset + byteOffset, count * 3);

let minY = Infinity, maxY = -Infinity;
let minZ = Infinity, maxZ = -Infinity;
let minX = Infinity, maxX = -Infinity;

for (let i = 0; i < count; i++) {
  const x = floats[i * 3];
  const y = floats[i * 3 + 1];
  const z = floats[i * 3 + 2];
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
  if (z < minZ) minZ = z;
  if (z > maxZ) maxZ = z;
}

console.log('Clip bounds in mesh space:');
console.log('X:', minX, maxX);
console.log('Y:', minY, maxY);
console.log('Z:', minZ, maxZ);
console.log('Scale 2.35, offset Y = -1.2');
console.log('Local hook bottom:', (minY * 2.35) - 1.2);
console.log('Local hook top:', (maxY * 2.35) - 1.2);
console.log('Local hook center:', (((minY + maxY)/2) * 2.35) - 1.2);
