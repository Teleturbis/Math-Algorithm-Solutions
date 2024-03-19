export function sumOfMultiples(
  startVal: number,
  endVal: number,
  factor?: number
): number {
  if (
    (factor !== undefined && typeof factor === 'number' && factor <= 0) ||
    startVal > endVal
  ) {
    throw new Error(
      'Invalid input. Factor must be greater than 0 and startVal must be less than endVal.'
    );
  }

  const n = [];
  const maxMultiple =
    factor !== undefined ? Math.floor(endVal / factor) : endVal;

  for (let i = startVal; i <= maxMultiple; i++) {
    const multiple = i * (factor ?? 1);
    if (multiple >= startVal) n.push(multiple);
  }

  return n.reduce((acc, curVal) => acc + curVal);
}
