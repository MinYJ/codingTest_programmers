const arr1 = ['5', '5', '2', '5'];
const arr2 = ['1', '2', '5', '5'];

/* 중복값 확인하기*/
const test = makeDuplicationObject(arr1);
const test2 = makeDuplicationObject(arr2);
const result = {};
const x = Object.keys(test);
const y = Object.keys(test2);

for (let i=0; i<x.length; ++i) {
  for (let j=0; j<y.length; ++j) {
    if(x[i] === y[j]) {
      if(test[x[i]] > test2[y[j]]) {
        result[y[j]] = test2[y[j]];
      } else if (test[x[i]] > test2[y[j]]) {
        result[x[i]] = test[x[i]];
      } else {
        result[x[i]] = test[x[i]];
      }
    }
  }
}



console.log(result);
function makeDuplicationObject(arr) {
  let result = {};
  for(let i=0; i<arr.length; ++i) {
    if (result[arr[i]] === undefined) result[arr[i]] = 1;
    else result[arr[i]] += 1;
  }

  return result;
}
/* reduce사용법 */
// arr.reduce((item, idx)=>{
//   console.log(`item: ${item}, idx: ${idx}`);
//   return 1;
// })
// console.log(result);

/*
for(let i=0; i<arr1.length; i++) {
  if (result1[arr1[i]] === undefined) result1[arr1[i]] = 1;
  else result1[arr1[i]] += 1;
}

for(let i=0; i<arr2.length; i++) {
  if (result2[arr2[i]] === undefined) result2[arr2[i]] = 1;
  else result2[arr2[i]] += 1;
}

result_arr1 = Object.keys(result1);
console.log(`result1`);
console.log(result1);
console.log(result_arr1);

result_arr2 = Object.keys(result2);
console.log(`result2`);
console.log(result2);
console.log(result_arr2);
*/





// 문자열 null은 false, 
/*
const test = '';
const test2 = 'aaaa';

if(test) {
  console.log(`true`);
} else {
  console.log(`false`);
}

if (test2) {
  console.log(`true`);
} else {
  console.log(`false;`)
}
*/