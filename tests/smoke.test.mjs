import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('Project documentation exists', () => {
  assert.ok(fs.existsSync('README.md'), 'README.md should exist');
  assert.ok(fs.existsSync('docs/agentvault-project-brief.md'), 'docs/agentvault-project-brief.md should exist');
});

test('package.json exports test script', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  assert.strictEqual(pkg.scripts.test, 'node --test tests/*.test.mjs', 'Test script should use node built-in runner');
});

test('README mentions test command', () => {
  const readme = fs.readFileSync('README.md', 'utf8');
  assert.ok(readme.includes('npm test'), 'README should document the npm test command');
});
