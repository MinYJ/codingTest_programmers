// 1. map 사용법
// numbers.map((element, index, array){})
/*
let numbers = [1,2,3,4,4,5];

numbers.map(function(number, index, array) {
  console.log(number);
  console.log(number);
  console.log(number);
})

numbers.map((number, index, araray)=> {
  console.log(number);
  console.log(number);
  console.log(number);
})
*/

// 2. reduce 사용법
// 2.1 기초
// let numbers = [1,2,3];
// const sum = numbers.reduce((accumulator, currentValue, index, array) => {
//   console.log(`accumulator: ${accumulator}`);
//   console.log(`currentValue: ${currentValue}`);

//   return accumulator + currentValue;
//   //console.log(currentValue);
//   //console.log(index);
//   //console.log(array);
// })

let numbers = [1,2,3];
const sum = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(accumulator);
  console.log(currentValue);
  return [...accumulator, currentValue * 2]
}, [])