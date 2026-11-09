// Resizes public/logo.png into favicons and app icons. The logo is never redrawn or recoloured.
import sharp from 'sharp';
const src = 'public/logo.png';
const out = [
  ['public/favicon-32.png', 32],
  ['public/apple-touch-icon.png', 180],
  ['public/icon-192.png', 192],
  ['public/icon-512.png', 512],
];
for (const [file, size] of out) {
  await sharp(src).resize(size, size).png().toFile(file);
  console.log('wrote', file);
}
