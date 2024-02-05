const set = new Set([1,2,3,3]);
console.log(set.size) // 3

set.size = 10; // 무시된다.
console.log(set.size) // 3