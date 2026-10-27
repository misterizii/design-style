// Builds two CSS entries from the same sources:
//   dist/styles.css       fonts + tokens + base + components  (web: loads Plus Jakarta Sans from Google Fonts)
//   dist/styles.base.css  tokens + base + components          (renderers: you supply the font yourself)
// The split exists because a remote @import is unreliable where frames are rendered
// one by one (Remotion, Puppeteer, Satori): the renderer does not wait for the
// stylesheet, so some frames come out in the fallback font.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const fonts = 'src/tokens/fonts.css';
const base = ['src/tokens/tokens.css', 'src/tokens/base.css'];

const compDir = 'src/components';
for (const name of readdirSync(compDir).sort()) {
  const css = join(compDir, name, `${name}.css`);
  try {
    readFileSync(css);
    base.push(css);
  } catch {}
}

const bundle = (files) => files.map((f) => `/* ${f} */\n${readFileSync(f, 'utf8')}`).join('\n');

writeFileSync('dist/styles.base.css', bundle(base));
writeFileSync('dist/styles.css', bundle([fonts, ...base]));
console.log(`dist/styles.base.css <- ${base.length} files`);
console.log(`dist/styles.css      <- ${base.length + 1} files`);
