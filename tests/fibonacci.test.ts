import { fibonacci } from '../src/fibonacci';

describe('fibonacci', () => {
  it('should calculate the right fibonacci sequence', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10, 1)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it('should throw an error if the end value is less than 0', () => {
    expect(() => fibonacci(-1)).toThrow(
      'Invalid input. End value must be greater than 0.'
    );
  });

  it('should throw an error if the start value is less than 0', () => {
    expect(() => fibonacci(10, -1)).toThrow(
      'Invalid input. Start value must be greater than 0.'
    );
  });
});
