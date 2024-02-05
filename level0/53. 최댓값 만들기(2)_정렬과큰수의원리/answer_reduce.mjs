const numbers = [1,2,-3,4,-5];
const result = numbers.reduce(
    (acc, cur, idx) => [
      ...acc,
      ...numbers.slice(idx + 1).map((v) => cur * v),
    ],
    []
);

console.log(result);