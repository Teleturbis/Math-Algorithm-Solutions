import {
  isPrime,
  nextPrime,
  sumOfPrimeRange,
  rangeOfPrimes,
} from '../src/prime';

describe('isPrime', () => {
  it('should correctly determine if a number is prime', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(11)).toBe(true);
  });
});

describe('nextPrime', () => {
  it('should correctly find the next prime number', () => {
    expect(nextPrime(2)).toBe(3);
    expect(nextPrime(3)).toBe(5);
    expect(nextPrime(4)).toBe(5);
    expect(nextPrime(5)).toBe(7);
    expect(nextPrime(6)).toBe(7);
    expect(nextPrime(7)).toBe(11);
  });
});

describe('sumOfPrimeRange', () => {
  it('should correctly calculate the sum of prime numbers within a range', () => {
    expect(sumOfPrimeRange(1, 10)).toBe(17); // Prime numbers from 1 to 10: 2, 3, 5, 7
    expect(sumOfPrimeRange(1, 20)).toBe(77); // Prime numbers from 1 to 20: 2, 3, 5, 7, 11, 13, 17, 19
  });
});

describe('rangeOfPrimes', () => {
  it('should correctly calculate the range of prime numbers', () => {
    expect(rangeOfPrimes(10)).toEqual([2, 3, 5, 7]);
    expect(rangeOfPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
