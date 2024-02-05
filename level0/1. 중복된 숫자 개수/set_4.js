// const set = new Set();
// console.log(set); // Set(0) {}

// set.add(1);
// console.log(set); // Set(1) {}

// const set = new Set();
// set.add(1).add(2);
// console.log(set); // Set(2) {1, 2}

// const set = new Set();
// set.add(1).add(2).add(2);
// console.log(set); // Set(2) {1, 2}

const set = new Set();
console.log(NaN === NaN); // false
set.add(NaN).add(NaN); // set객체는 같다고 평가하여 중복 추가 허용하지 않는다.