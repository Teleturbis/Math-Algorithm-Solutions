// This file is used to test the modules in development mode.
// Please keep this file clean and delete the content before publishing the pull request.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Maths from '.';

const x = Array.from({ length: 200 }, (_, i) => i + 1);

const y = x.map((x) => 50 + 2 * x + (Math.random() - 0.5) * 405);

console.log(Maths.linearRegression(x, y));
