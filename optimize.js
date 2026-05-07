// Compress every photo in photos/ to a web-friendly size + quality.
// Originals are backed up to photos-orig/ in case we need them later.
// Run with: node optimize.js
//
// Targets:
//   max width 1920px (downscales bigger photos, leaves smaller alone)
//   JPEG quality 78 with mozjpeg encoder (best size/quality ratio)
//   strips metadata (EXIF, profile) — saves ~50-200KB per photo
//
// Typical reduction: 5-13MB JPGs → 200-500KB.

const sharp = require('sharp');
const fs    = require('fs').promises;
const path  = require('path');

const SRC_DIR    = path.join(__dirname, 'photos');
const BACKUP_DIR = path.join(__dirname, 'photos-orig');
const MAX_WIDTH  = 1920;
const QUALITY    = 78;

async function main() {
  await fs.mkdir(BACKUP_DIR, { recursive: true });

  const files = (await fs.readdir(SRC_DIR))
    .filter(f => /\.(jpe?g|png)$/i.test(f));

  let totalBefore = 0;
  let totalAfter  = 0;

  for (const file of files) {
    const srcPath    = path.join(SRC_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);

    // Skip if already optimized (backup exists means we already ran).
    try { await fs.access(backupPath); continue; } catch {}

    const srcBuf  = await fs.readFile(srcPath);
    const before  = srcBuf.length;
    totalBefore  += before;

    // Backup original first
    await fs.writeFile(backupPath, srcBuf);

    // Compress
    const meta = await sharp(srcBuf).metadata();
    const resized = await sharp(srcBuf)
      .rotate()
      .resize({
        width:  Math.min(meta.width  || MAX_WIDTH, MAX_WIDTH),
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    await fs.writeFile(srcPath, resized);
    totalAfter += resized.length;

    const pct = ((1 - resized.length / before) * 100).toFixed(0);
    console.log(`  ${file.padEnd(32)}  ${(before/1e6).toFixed(2)}MB → ${(resized.length/1e3).toFixed(0)}KB  (-${pct}%)`);
  }

  console.log('');
  console.log(`Total: ${(totalBefore/1e6).toFixed(1)}MB → ${(totalAfter/1e6).toFixed(1)}MB  (saved ${((totalBefore-totalAfter)/1e6).toFixed(1)}MB)`);
}

main().catch(err => { console.error(err); process.exit(1); });
