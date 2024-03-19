import { sum, sumOfRange } from '../src/sum';

describe('sum', () => {
  it('should calculate the right sum', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-3, 4)).toBe(1);
  });

  it('should calculate the currect sum of the range', () => {
    expect(sumOfRange(1, 10)).toBe(55);
    expect(sumOfRange(1, 100)).toBe(5050);
    expect(sumOfRange(1, 1000)).toBe(500500);
    expect(sumOfRange(-50, 50)).toBe(0);
  });
});
