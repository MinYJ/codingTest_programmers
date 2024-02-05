function solution(arr) {
  let nums = arr;
  let length = arr.length;
  let value = 0;
  let index = 0;
  /*
  while (true) {
      length = parseInt(Math.random() * 1000000000) % 10 + 1;
      if (length%2 == 0) break;
  }
  
  while (index < length) {
      nums[index] = parseInt(Math.random() * 1000000000) % 10 + 1;
      index += 1;
  }
  */
  
  let tableLength = findPrimeNumber(length * 2);
  let table = [];
  let tableIndex = 0;
  while (true) { 
      if (tableIndex == tableLength) break;
      table [tableIndex] = -1;
      tableIndex += 1; 
  }
  
  
  for (let i = 0; i < nums.length; i++) {
      let hashIndex = nums[i] % tableLength;
      if (table[hashIndex] == -1) {
          table[hashIndex] = nums[i];
      } else {
          let value = [];
          value.push(table[hashIndex]);
          value.push(nums[i]);
          table[hashIndex] = value;
      }     
     
  }
  
  let count = 0;
  table.forEach((item, idx)=>{
      if(item != -1) count += 1;
  });

  if (count > length/2) count = length/2;

  return count;
}
  
function isPrimeNumber(number) {
    let checkNumber = parseInt(Math.sqrt(number));
    while (checkNumber > 1) {
        if (number % checkNumber == 0) return false;
        checkNumber -= 1;
    }
    return true;
}

function findPrimeNumber(number) {
    let primeNumber = 0;
    while(true) {
        if (isPrimeNumber(number)) {
            primeNumber = number;
            return primeNumber;
        }
        number += 1;
    }
    primeNumber = number;
    return primeNumber;
}

let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
console.log(solution(arr));