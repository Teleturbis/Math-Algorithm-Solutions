# Mathematical Functions
<sup>German below</sup>

This folder contains various JavaScript implementations to solve different mathematical problems and challenges.

## Functions

### prime.ts

- `isPrime(n: number)`: Checks if a number is prime.
- `nextPrime(n: number)`: Returns the next prime number after a given number.
- `sieveOfEratosthenes(endVal: number)`: Implements the Sieve of Eratosthenes to find all prime numbers up to a given value.
- `sumOfPrimeRange(startVal: number, endVal: number)`: Computes the sum of all prime numbers in a given range.
- `rangeOfPrimes(endVal: number)`: Returns all prime numbers up to a given value.

The functions in `prime.ts` were implemented with the aim of providing efficient methods for prime number checking and calculation. The Sieve of Eratosthenes was used due to its efficiency in determining prime numbers.

### factorial.ts

- `factorial(val: number)`: Computes the factorial of a given number.

The `factorial` function was implemented simply to provide a reliable computation of the factorial. Negative numbers are not supported.

### fibonacci.ts

- `fibonacci(endVal: number, startVal?: number)`: Computes the Fibonacci sequence up to a given value.

The `fibonacci` function was implemented using an efficient loop to generate the Fibonacci sequence. The function optionally supports a starting value and checks for invalid inputs.

### smallestCommonMultiple.ts

- `smallestCommonMultiple(startVal: number, endVal: number)`: Computes the smallest common multiple of all numbers in a given range.

The `smallestCommonMultiple` function uses the Euclidean algorithm to find the greatest common divisor, and then computes the smallest common multiple. The implementation aims to provide an efficient solution to this classic mathematical problem.

### sum.ts

- `sum(a: number, b: number)`: Computes the sum of two numbers.
- `sumOfRange(startVal: number, endVal: number)`: Computes the sum of all numbers in a given range.

The `sum` functions were implemented simply to facilitate sum calculation and provide a readable solution.

### sumOfMultiples.ts

- `sumOfMultiples(startVal: number, endVal: number, factor?: number)`: Computes the sum of all multiples of a number in a given range.

The `sumOfMultiples` function was developed to calculate the sum of all multiples of a number within a specified range. The implementation was kept simple to increase readability while ensuring an efficient solution.

## Approach

The approach to implementing these functions involved using proven mathematical algorithms and techniques to find reliable and efficient solutions to each problem. Each function was carefully developed to ensure optimal performance and usability.

---

# Mathematische Funktionen

Dieser Ordner enthält verschiedene JavaScript-Implementierungen zur Lösung verschiedener mathematischer Probleme und Herausforderungen.

## Funktionen

### prime.ts

- `isPrime(n: number)`: Überprüft, ob eine Zahl eine Primzahl ist.
- `nextPrime(n: number)`: Gibt die nächste Primzahl nach einer gegebenen Zahl zurück.
- `sieveOfEratosthenes(endVal: number)`: Implementiert das Sieb des Eratosthenes, um alle Primzahlen bis zu einem gegebenen Wert zu finden.
- `sumOfPrimeRange(startVal: number, endVal: number)`: Berechnet die Summe aller Primzahlen in einem gegebenen Bereich.
- `rangeOfPrimes(endVal: number)`: Gibt alle Primzahlen bis zu einem gegebenen Wert zurück.

Die Funktionen in `prime.ts` wurden mit dem Ziel implementiert, effiziente Methoden zur Primzahlprüfung und -berechnung bereitzustellen. Der Sieb des Eratosthenes wurde aufgrund seiner Effizienz bei der Bestimmung von Primzahlen verwendet.

### factorial.ts

- `factorial(val: number)`: Berechnet die Fakultät einer gegebenen Zahl.

Die `factorial`-Funktion wurde einfach implementiert, um eine zuverlässige Berechnung der Fakultät bereitzustellen. Negative Zahlen werden nicht unterstützt.

### fibonacci.ts

- `fibonacci(endVal: number, startVal?: number)`: Berechnet die Fibonacci-Folge bis zu einem gegebenen Wert.

Die `fibonacci`-Funktion wurde mithilfe einer effizienten Schleife implementiert, um die Fibonacci-Folge zu generieren. Die Funktion unterstützt optional einen Startwert und überprüft auf ungültige Eingaben.

### smallestCommonMultiple.ts

- `smallestCommonMultiple(startVal: number, endVal: number)`: Berechnet das kleinste gemeinsame Vielfache aller Zahlen in einem gegebenen Bereich.

Die `smallestCommonMultiple`-Funktion verwendet den Euklidischen Algorithmus, um den größten gemeinsamen Teiler zu finden, und berechnet dann das kleinste gemeinsame Vielfache. Die Implementierung zielt darauf ab, eine effiziente Lösung für dieses klassische mathematische Problem bereitzustellen.

### sum.ts

- `sum(a: number, b: number)`: Berechnet die Summe zweier Zahlen.
- `sumOfRange(startVal: number, endVal: number)`: Berechnet die Summe aller Zahlen in einem gegebenen Bereich.

Die `sum`-Funktionen wurden einfach implementiert, um die Summenberechnung zu erleichtern und eine leicht lesbare Lösung zu bieten.

### sumOfMultiples.ts

- `sumOfMultiples(startVal: number, endVal: number, factor?: number)`: Berechnet die Summe aller Vielfachen einer Zahl in einem gegebenen Bereich.

Die `sumOfMultiples`-Funktion wurde entwickelt, um die Summe aller Vielfachen einer Zahl in einem bestimmten Bereich zu berechnen. Die Implementierung wurde einfach gehalten, um die Lesbarkeit zu erhöhen und gleichzeitig eine effiziente Lösung zu gewährleisten.

## Herangehensweise

Die Herangehensweise bei der Implementierung dieser Funktionen bestand darin, bewährte mathematische Algorithmen und Techniken zu verwenden, um zuverlässige und effiziente Lösungen für jedes Problem zu finden. Jede Funktion wurde sorgfältig entwickelt, um eine optimale Leistung und Benutzerfreundlichkeit zu gewährleisten.
