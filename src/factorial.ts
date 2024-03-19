export function factorial(val: number) {
  if (val < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }

  let res = 1;
  for (let i = 1; i <= val; i++) {
    res *= i;
  }

  return res;
}
