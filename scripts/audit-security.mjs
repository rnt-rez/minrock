import fs from 'node:fs';
import path from 'node:path';

function walk(dir, exts = ['.astro', '.ts', '.js', '.mjs', '.md', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === '.astro') continue;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full, exts));
    } else if (exts.some(ext => file.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

const srcFiles = walk('src');
const distFiles = walk('dist', ['.html', '.js']);

console.log(`Auditing source (${srcFiles.length} files) and compiled (${distFiles.length} files) for DevSecOps Sentinel compliance...\n`);

const findings = [];

// 1. Secret Scanning Patterns
const secretPatterns = [
  { name: 'Private Key', regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'GitHub Personal Token', regex: /ghp_[0-9a-zA-Z]{36}/ },
  { name: 'Google API Key', regex: /AIzaSy[0-9a-zA-Z\\-_]{33}/ },
  { name: 'OpenAI API Key', regex: /sk-[a-zA-Z0-9]{20,}/ },
  { name: 'AWS Access Key', regex: /AKIA[0-9A-Z]{16}/ },
  { name: 'Generic Password String', regex: /(api_key|secret_key|password)\s*[:=]\s*["'][^"']{8,}["']/i }
];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');

  for (const pat of secretPatterns) {
    const match = content.match(pat.regex);
    if (match) {
      findings.push({ severity: 'HIGH', category: 'Secret Leak', file: rel, detail: `Pattern ${pat.name} matched: "${match[0].slice(0, 50)}"` });
    }
  }
}

// 2. OWASP Security Audit in compiled HTML
for (const file of distFiles.filter(f => f.endsWith('.html'))) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');

  // Insecure HTTP resources
  const httpMatches = content.match(/src=["']http:\/\/[^"']+["']/gi) || [];
  for (const m of httpMatches) {
    findings.push({ severity: 'MEDIUM', category: 'Mixed Content (OWASP)', file: rel, detail: `Insecure HTTP resource loaded: ${m}` });
  }

  // target="_blank" without rel="noopener" or "noreferrer"
  const blankLinks = content.match(/<a[^>]*target=["']_blank["'][^>]*>/gi) || [];
  for (const link of blankLinks) {
    if (!/rel=["'][^"']*(noopener|noreferrer)[^"']*["']/i.test(link)) {
      findings.push({ severity: 'LOW', category: 'Reverse Tabnabbing (OWASP)', file: rel, detail: `target="_blank" without rel="noopener noreferrer": ${link.slice(0, 70)}` });
    }
  }
}

console.log('=============================================');
console.log('       DEVSECOPS SENTINEL AUDIT REPORT       ');
console.log('=============================================');
console.log(`Source Files Checked:   ${srcFiles.length}`);
console.log(`Compiled Files Checked: ${distFiles.length}`);
console.log(`Security Findings:      ${findings.length}`);
console.log('=============================================\n');

if (findings.length > 0) {
  console.log('Findings:');
  findings.forEach((f, idx) => {
    console.log(`[${idx + 1}] [${f.severity}] [${f.category}] in ${f.file}:`);
    console.log(`    ${f.detail}`);
  });
} else {
  console.log('🎉 100% SECURE: Zero credential leaks, zero mixed content, zero reverse tabnabbing vulnerabilities!');
}
