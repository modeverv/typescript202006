export {};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  const reducer = (accu: number, current: number): number => accu + current;
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
