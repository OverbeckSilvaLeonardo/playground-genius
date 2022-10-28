export function getRandomInt(): number {
  return Math.floor(Math.random() * 4);
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}