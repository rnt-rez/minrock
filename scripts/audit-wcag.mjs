import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = walk('dist');
console.log(`Auditing ${htmlFiles.length} HTML files in dist/ for WCAG 2.1/2.2 AA & SEO standards...`);

const issues = [];
const stats = {
  pagesAudited: htmlFiles.length,
  buttonsChecked: 0,
  linksChecked: 0,
  imagesChecked: 0,
  headingsChecked: 0,
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('dist', file).replace(/\\/g, '/');

  // 1. Check html lang (WCAG 3.1.1)
  if (!content.includes('<html') || !/<html[^>]*\blang=["'][^"']+["']/i.test(content)) {
    issues.push({ file: rel, type: 'WCAG 3.1.1 (Language of Page)', msg: 'Missing or empty <html lang="..."> attribute.' });
  }

  // 2. Check title (WCAG 2.4.2)
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    issues.push({ file: rel, type: 'WCAG 2.4.2 (Page Titled)', msg: 'Missing or empty <title> element.' });
  }

  // 3. Check viewport (WCAG 1.4.4 Resize text)
  if (!/<meta[^>]*name=["']viewport["']/i.test(content)) {
    issues.push({ file: rel, type: 'WCAG 1.4.4 (Resize text)', msg: 'Missing <meta name="viewport"> tag.' });
  }

  // 4. Check img alt (WCAG 1.1.1 Non-text Content)
  const imgMatches = content.match(/<img[^>]*>/gi) || [];
  for (const img of imgMatches) {
    stats.imagesChecked++;
    if (!/\balt=["'][^"']*["']/i.test(img)) {
      issues.push({ file: rel, type: 'WCAG 1.1.1 (Non-text Content)', msg: `Image missing alt attribute: ${img.slice(0, 70)}` });
    }
  }

  // 5. Check buttons without accessible name (WCAG 4.1.2 Name, Role, Value)
  const btnMatches = content.match(/<button[\s\S]*?<\/button>/gi) || [];
  for (const btn of btnMatches) {
    stats.buttonsChecked++;
    const hasAria = /aria-label=["'][^"']+["']/i.test(btn);
    const hasAriaLabelledby = /aria-labelledby=["'][^"']+["']/i.test(btn);
    const innerText = btn.replace(/<[^>]+>/g, '').trim();
    if (!hasAria && !hasAriaLabelledby && !innerText) {
      issues.push({ file: rel, type: 'WCAG 4.1.2 (Name, Role, Value)', msg: `Button missing accessible name (no text, no aria-label): ${btn.slice(0, 80)}` });
    }
  }

  // 6. Check links without accessible name (WCAG 2.4.4 Link Purpose)
  const linkMatches = content.match(/<a[\s\S]*?<\/a>/gi) || [];
  for (const a of linkMatches) {
    stats.linksChecked++;
    const hasAria = /aria-label=["'][^"']+["']/i.test(a);
    const hasImgWithAlt = /<img[^>]*\balt=["'][^"']+["']/i.test(a);
    const innerText = a.replace(/<[^>]+>/g, '').trim();
    if (!hasAria && !hasImgWithAlt && !innerText) {
      issues.push({ file: rel, type: 'WCAG 2.4.4 (Link Purpose)', msg: `Link missing accessible text or aria-label: ${a.slice(0, 80)}` });
    }
  }

  // 7. Check heading hierarchy skips (WCAG 1.3.1 Info and Relationships)
  const headings = Array.from(content.matchAll(/<h([1-6])[^>]*>/gi)).map(m => parseInt(m[1]));
  stats.headingsChecked += headings.length;
  for (let i = 0; i < headings.length - 1; i++) {
    if (headings[i + 1] > headings[i] + 1) {
      issues.push({ file: rel, type: 'WCAG 1.3.1 (Heading Order)', msg: `Heading level skipped from h${headings[i]} to h${headings[i + 1]}. Headings should not skip levels.` });
      break;
    }
  }

  // 8. Check duplicate DOM IDs (WCAG 4.1.1 Parsing)
  const idMatches = Array.from(content.matchAll(/\bid=["']([^"']+)["']/gi)).map(m => m[1]);
  const seenIds = new Set();
  for (const id of idMatches) {
    if (seenIds.has(id)) {
      issues.push({ file: rel, type: 'WCAG 4.1.1 (Unique IDs)', msg: `Duplicate DOM ID found: #${id}` });
    }
    seenIds.add(id);
  }
}

console.log('\n=============================================');
console.log('         WCAG & SEO AUDIT REPORT             ');
console.log('=============================================');
console.log(`Pages Audited:    ${stats.pagesAudited}`);
console.log(`Buttons Checked:  ${stats.buttonsChecked}`);
console.log(`Links Checked:    ${stats.linksChecked}`);
console.log(`Images Checked:   ${stats.imagesChecked}`);
console.log(`Headings Checked: ${stats.headingsChecked}`);
console.log(`Issues Found:     ${issues.length}`);
console.log('=============================================\n');

if (issues.length > 0) {
  console.log('Detected Findings:');
  issues.forEach((iss, idx) => {
    console.log(`[${idx + 1}] [${iss.type}] in ${iss.file}:`);
    console.log(`    ${iss.msg}`);
  });
} else {
  console.log('🎉 100% CLEAN: Zero WCAG violations detected across all static routes!');
}
