export function sumOfMultiples(
  startVal: number,
  endVal: number,
  factor?: number
) {
  if ((factor && factor <= 0) || startVal > endVal) {
    return 0; // Fehlerbehandlung für ungültige Eingaben
  }

  const n = [];
  const maxMultiple = factor ? Math.floor(endVal / factor) : endVal;

  for (let i = startVal; i <= maxMultiple; i++) {
    const multiple = i * (factor || 1);
    if (multiple >= startVal) n.push(multiple);
  }

  return n.reduce((acc, curVal) => acc + curVal);
}
