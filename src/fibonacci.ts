export function fibonacci(endVal: number, startVal?: number): number[] {
  if (endVal < 0)
    throw new Error('Invalid input. End value must be greater than 0.');
  if (startVal && startVal < 0)
    throw new Error('Invalid input. Start value must be greater than 0.');

  const fibonacciArr: number[] = [];

  let a = startVal || 0;
  let b = 1;

  while (fibonacciArr.length < endVal) {
    fibonacciArr.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }

  return fibonacciArr;
}
