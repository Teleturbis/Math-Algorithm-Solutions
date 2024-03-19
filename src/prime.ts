export function isPrime(n: number) {
  if (n < 1) return false;
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

export function nextPrime(n: number) {
  let i = n + 1;

  while (!isPrime(i)) {
    i++;
  }

  return i;
}

function sieveOfEratosthenes(endVal: number) {
  // Initialisierung des Siebs des Eratosthenes
  const sieve = Array(endVal + 1).fill(true);
  sieve[0] = sieve[1] = false;

  // Durchführung des Siebs
  for (let i = 2; i <= Math.sqrt(endVal); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= endVal; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve;
}

export function sumOfPrimeRange(startVal: number, endVal: number) {
  const sieve = sieveOfEratosthenes(endVal);

  // Berechnung der Summe aller Primzahlen im Bereich
  let sum = 0;
  for (let i = startVal; i <= endVal; i++) {
    if (sieve[i]) {
      sum += i;
    }
  }

  return sum;
}

export function rangeOfPrimes(endVal: number) {
  const sieve = sieveOfEratosthenes(endVal);

  const trueIndices = [];
  for (let i = 0; i < sieve.length; i++) {
    if (sieve[i]) {
      trueIndices.push(i);
    }
  }
  return trueIndices;
}
