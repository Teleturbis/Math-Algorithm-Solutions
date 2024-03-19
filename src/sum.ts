export function sum(a: number, b: number) {
  return a + b;
}

export function sumOfRange(startVal: number, endVal: number) {
  let res = 0;

  for (let i = startVal; i <= endVal; i++) {
    res = sum(res, i);
  }

  return res;
}
