let arr = [4,2,1,3]

console.log(...arr);
console.log(Math.min(4, 1, 2, 3));
console.log(arr.indexOf(Math.min(...arr)));
console.log(arr.splice(arr.indexOf(Math.min(...arr)), 1));
console.log(arr);