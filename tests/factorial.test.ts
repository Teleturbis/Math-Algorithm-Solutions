import { factorial } from '../src/factorial';

describe('factorial function', () => {
  test('calculates factorial correctly for positive numbers', () => {
    expect(factorial(0)).toBe(1); // 0! = 1
    expect(factorial(1)).toBe(1); // 1! = 1
    expect(factorial(2)).toBe(2); // 2! = 2
    expect(factorial(5)).toBe(120); // 5! = 120
    expect(factorial(10)).toBe(3628800); // 10! = 3628800
  });

  test('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1); // 0! = 1
  });

  test('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow(
      'Factorial is not defined for negative numbers'
    );
  });
});
