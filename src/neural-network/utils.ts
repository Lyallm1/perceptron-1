/** Returns a random value between -1 an 1 */
export function randomValue (): number {
  return Math.random() * 2 - 1;
}

/** Returns a shuffled copy of an array */
export function shuffle (array: any[]): any[] {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}