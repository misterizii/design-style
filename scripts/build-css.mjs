// Concatenates tokens + component styles into dist/styles.css.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const order = ['src/tokens/fonts.css', 'src/tokens/tokens.css', 'src/tokens/base.css'];
const compDir = 'src/components';
for (const name of readdirSync(compDir).sort()) {
  const css = join(compDir, name, `${name}.css`);
  try { readFileSync(css); order.push(css); } catch {}
}
const out = order.map((f) => `/* ${f} */\n${readFileSync(f, 'utf8')}`).join('\n');
writeFileSync('dist/styles.css', out);
console.log(`dist/styles.css <- ${order.length} files`);
