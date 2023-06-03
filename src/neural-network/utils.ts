export function randomValue(): number {
  return Math.random() * 2 - 1;
}
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  newArray.reverse().forEach((val, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [val, newArray[j]] = [newArray[j], val];
  });
  return newArray;
}
