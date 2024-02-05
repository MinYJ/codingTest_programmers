// const set = new Set();
// console.log(set); // 빈 객체이므로 set(0) {}

// const set1 = new Set([1,2,2,3,3]);
// console.log(set1) // set(3) {1,2,3}

// Set을 이용한 배열의 중복 요소 제거
const array = [1, 2, 3, 3, 4, 4, 5, 5];
const result = [...new Set(array)];

console.log(result); // [1, 2, 3, 4, 5]

// const array = [1, 2, 3, 3, 4, 4, 5, 5];
// array.filter((v, i, self) => {
//   console.log(`v: ${v}`);
//   console.log(`i: ${i}`);
//   console.log(self.indexOf(v));
// })