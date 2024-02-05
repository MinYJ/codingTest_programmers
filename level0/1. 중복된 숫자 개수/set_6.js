// const set = new Set([1, 2, 3]);

// // 요소 2를 삭제한다.
// set.delete(2);
// console.log(set); // Set(2) {1, 3}

// // 요소 1을 삭제한다.
// set.delete(1);
// console.log(set); // Set(1) {3}

const set = new Set([1, 2, 3]);

// 존재하지 않는 요소 0을 삭제하면 에러 없이 무시된다.
set.delete(0);
console.log(set); // Set(3) {1, 2, 3}

console.log(set.delete(4)); // false