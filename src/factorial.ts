export function factorial(val: number) {
  let res = 1;
  for (let i = 1; i <= val; i++) {
    res *= i;
  }

  return res;
}
