// const set = new Set();
// console.log(set); // 빈 객체이므로 set(0) {}

// const set1 = new Set([1,2,2,3,3]);
// console.log(set1) // set(3) {1,2,3}


// // for문을 이용한 중복 요소 제거

// const array = [1, 2, 3, 3, 4, 4, 5, 5];
// let result = [];

// for(let i=0; i<array.length; i++) {
//   if(i == 0) {
//     result.push(array[i]);
//     continue;
//   }
//   for(let j=0; j<result.length; j++) {
//     let onDuplicate = false;
//     if(result[j] == array[i]) {
//       onDuplicate = true;
//     }
//     if(j == result.length - 1 && onDuplicate == false) {
//       result.push(array[i]);
//     }
//   }
// }
// console.log(result); // [ 1, 2, 3, 4, 5]

//Set을 이용한 배열의 중복 요소 제거
const array = [1, 2, 3, 3, 4, 4, 5, 5];
const result = [...new Set(array)];

console.log(result); // [1, 2, 3, 4, 5]