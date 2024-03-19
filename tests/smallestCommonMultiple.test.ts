import { smallestCommonMultiple } from '../src/smallestCommonMultiple';

describe('smallestCommonMultiple', () => {
  it('should return the smallest common multiple of numbers within the range', () => {
    expect(smallestCommonMultiple(1, 5)).toBe(60); // Smallest common multiple of numbers 1 to 5 is 60
    expect(smallestCommonMultiple(1, 10)).toBe(2520); // Smallest common multiple of numbers 1 to 10 is 2520
    expect(smallestCommonMultiple(1, 20)).toBe(232792560); // Smallest common multiple of numbers 1 to 20 is 232792560
  });

  it('should handle invalid input and return 0', () => {
    expect(() => smallestCommonMultiple(10, 1)).toThrow(
      'Invalid input. startVal must be less than endVal.'
    ); // Invalid input: startVal > endVal
  });
});
