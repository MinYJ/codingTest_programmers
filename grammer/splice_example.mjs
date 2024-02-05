// 1. 인덱스 2번이후 배열에 담아서 새로운 배열만든다.
/*
let number = ['1', '2', '3', '4', '5'];
let newNumber = number.splice(2);
console.log(number);
console.log(newNumber);
*/

// 2. 첫 번째 매개인자 - 원하는 인덱스, 두 번째 매개인자 - 몇 개
/*
let number = ['1', '2', '3', '4', '5'];
let newNumber = number.splice(2, 1);
console.log(number);
console.log(newNumber);
*/

// 3. 세 번째 매개인자 - 이것을 그 위치에 넣어라
/*
let number = ['1', '2', '3', '4', '5'];
let newNumber = number.splice(2, 2, '1000', '2000','3000');
console.log(number);
console.log(newNumber);
*/

// 4. 수정 삭제 없이 인자추가
let number = ['1', '2', '3', '4', '5'];
let newNumber = number.splice(2,0, "10000");
console.log(number);
console.log(newNumber);