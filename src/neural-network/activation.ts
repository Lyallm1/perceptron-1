export function sign (value: number) {
  return value >= 0 ? 1 : -1;
}

export function sigmoid (value: number) {
  return 1 / (1 + Math.exp(value));
}

export function relu (value: number): number {
  return Math.max(value, 0);
}