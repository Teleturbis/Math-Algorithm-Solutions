"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var coverageSummaryPath = './coverage/coverage-summary.json';
if (!fs.existsSync(coverageSummaryPath)) {
    console.error('Coverage summary file not found.');
    process.exit(1);
}
var coverageSummary = JSON.parse(fs.readFileSync(coverageSummaryPath, 'utf8'));
var coverageCheckPassed = true;
Object.keys(coverageSummary).forEach(function (file) {
    var _a = coverageSummary[file], statements = _a.statements, branches = _a.branches, functions = _a.functions, lines = _a.lines;
    if (statements.pct < 90 ||
        branches.pct < 90 ||
        functions.pct < 90 ||
        lines.pct < 90) {
        console.log("Coverage check failed for ".concat(file, ": Statements ").concat(statements.pct, "%, Branches ").concat(branches.pct, "%, Functions ").concat(functions.pct, "%, Lines ").concat(lines.pct, "%"));
        coverageCheckPassed = false;
    }
    else {
        console.log("Coverage check passed for ".concat(file, ": Statements ").concat(statements.pct, "%, Branches ").concat(branches.pct, "%, Functions ").concat(functions.pct, "%, Lines ").concat(lines.pct, "%"));
    }
});
if (!coverageCheckPassed) {
    process.exit(1);
}
console.log('Coverage check passed. 🎉🎉🎉\nTotal coverage:\n- lines - ', coverageSummary.total.lines.pct, '%\n- statements - ', coverageSummary.total.statements.pct, '%\n- branches - ', coverageSummary.total.branches.pct, '%\n- functions - ', coverageSummary.total.functions.pct);
