// One-off: rebuild a couple of photos so the slider doesn't have to
// over-crop them. Reads the originals from photos-orig/ and writes
// landscape-ratio versions to photos/.
//
// cottage-fridge.jpg:
//   Original is portrait (2992×4488). The slider crops half the height
//   off when it object-fit:covers. Solution: composite the portrait
//   centered on a 1920×1280 landscape canvas with a darkened, blurred
//   version of the same image as the side fill — keeps the full
//   subject visible without letterbox bars.
//
// room-rack.jpg:
//   Original is landscape 5472×3648. Re-export at 1920×1280 (3:2)
//   without any directional crop so center-cover shows the rack +
//   armchair + wall composition evenly.
//
// Run with: node recrop-photos.js

const sharp = require('sharp');
const path  = require('path');

const ORIG = path.join(__dirname, 'photos-orig');
const OUT  = path.join(__dirname, 'photos');
const W    = 1920;
const H    = 1280;

async function rebuildFridge() {
  const src = path.join(ORIG, 'cottage-fridge.jpg');
  const dst = path.join(OUT,  'cottage-fridge.jpg');

  // 1. Foreground: the portrait, scaled to fit inside the landscape height
  const fg = await sharp(src)
    .resize({ height: H, withoutEnlargement: false })
    .toBuffer();
  const fgMeta = await sharp(fg).metadata();

  // 2. Background: same source, scaled to fill the canvas (will get
  //    cropped on the top/bottom), heavily blurred and slightly darker
  //    so it reads as ambient backdrop, not a duplicate image.
  const bg = await sharp(src)
    .resize({ width: W, height: H, fit: 'cover', position: 'center' })
    .blur(40)
    .modulate({ brightness: 0.65, saturation: 0.6 })
    .toBuffer();

  // 3. Compose: blurred bg + sharp portrait centered horizontally.
  const left = Math.round((W - fgMeta.width) / 2);
  await sharp(bg)
    .composite([{ input: fg, top: 0, left }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);

  console.log('cottage-fridge.jpg rebuilt:', `${W}×${H} (portrait centered on blurred bg)`);
}

async function rebuildRack() {
  const src = path.join(ORIG, 'room-rack.jpg');
  const dst = path.join(OUT,  'room-rack.jpg');

  // Plain center-crop landscape re-export — same 3:2 ratio as the
  // original, just compressed for web. The HTML side-effect is the
  // existing `object-position: left 60%` inline style; removing it
  // also recenters this slide.
  await sharp(src)
    .resize({ width: W, height: H, fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);

  console.log('room-rack.jpg rebuilt:', `${W}×${H} (centered)`);
}

(async () => {
  await rebuildFridge();
  await rebuildRack();
  console.log('done');
})();
