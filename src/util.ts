export function sum(data: Array<number>) {
  return data.reduce((partialSum, a) => partialSum + a, 0);
}