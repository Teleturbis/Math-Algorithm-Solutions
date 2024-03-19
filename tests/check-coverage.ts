import * as fs from 'fs';

interface Coverage {
  statements: { pct: number }
  branches: { pct: number }
  functions: { pct: number }
  lines: { pct: number }
}

const coverageSummaryPath = './coverage/coverage-summary.json';

if (!fs.existsSync(coverageSummaryPath)) {
  console.error('Coverage summary file not found.');
  process.exit(1);
}

const coverageSummary: Record<string, Coverage> = JSON.parse(
  fs.readFileSync(coverageSummaryPath, 'utf8')
);

let coverageCheckPassed = true;

Object.keys(coverageSummary).forEach((file) => {
  const { statements, branches, functions, lines } = coverageSummary[file];
  if (
    statements.pct < 90 ||
    branches.pct < 90 ||
    functions.pct < 90 ||
    lines.pct < 90
  ) {
    console.log(
      `Coverage check failed for ${file}: Statements ${statements.pct}%, Branches ${branches.pct}%, Functions ${functions.pct}%, Lines ${lines.pct}%`
    );
    coverageCheckPassed = false;
  }
});

if (!coverageCheckPassed) {
  process.exit(1);
}
