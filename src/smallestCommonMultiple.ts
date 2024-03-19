// Euklidischer Algorithmus
function gcd(a: number, b: number) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

export function smallestCommonMultiple(startVal: number, endVal: number) {
  let result = startVal;
  for (let i = startVal + 1; i <= endVal; i++) {
    result = lcm(result, i);
  }
  return result;
}
