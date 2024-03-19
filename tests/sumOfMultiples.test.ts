import { sumOfMultiples } from '../src/sumOfMultiples';

describe('sumOfMultiples', () => {
  it('should return the sum of multiples within the range when factor is provided', () => {
    expect(sumOfMultiples(1, 10, 2)).toBe(30); // 2 + 4 + 6 + 8 + 10 = 30
    expect(sumOfMultiples(1, 10, 3)).toBe(18); // 3 + 6 + 9 = 18
    expect(sumOfMultiples(1, 10, 5)).toBe(15); // 5 + 10 = 15
  });

  it('should return the sum of all numbers within the range when factor is not provided', () => {
    expect(sumOfMultiples(1, 10)).toBe(55); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
  });

  it('should handle invalid input and return 0', () => {
    expect(() => sumOfMultiples(10, 1)).toThrow(
      'Invalid input. Factor must be greater than 0 and startVal must be less than endVal.'
    ); // Invalid input: startVal > endVal
    expect(() => sumOfMultiples(1, 10, -2)).toThrow(
      'Invalid input. Factor must be greater than 0 and startVal must be less than endVal.'
    ); // Invalid input: factor <= 0
  });
});
