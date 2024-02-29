function solution(order) {
    const mySet = new Set([3,6,9]);
    return String(order).split('')
    .filter(num => mySet.has(Number(num)))
    .length;
}
const order = 29423;

const mySet = new Set([3,6,9]);
console.log(mySet);
console.log(order);
console.log(String(order));