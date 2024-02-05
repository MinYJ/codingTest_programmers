const array = [1,1,2,3,4,5];
const n = 1;
let count = 0;
array.forEach((item, idx) => {
  if (item == 1) count = count + 1; 
})

console.log(count);