const array = [101, 150, 87];

let sorted = array.slice().sort((a,b)=>b-a);
const result = array.map(v=>sorted.indexOf(v)+1);

console.log(result);
// console.log(array);
// console.log(sorted);
// console.log(sorted.indexOf(101));
// console.log("abcd".indexOf("b"));

// console.log("abc".slice(0,1));