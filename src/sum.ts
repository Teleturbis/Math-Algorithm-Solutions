export function sum(a: number, b: number): number {
  return a + b;
}

export function sumOfRange(startVal: number, endVal: number): number {
  let res = 0;

  for (let i = startVal; i <= endVal; i++) {
    res = sum(res, i);
  }

  return res;
}
