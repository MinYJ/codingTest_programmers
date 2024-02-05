const array = [149, 180, 192, 170];

function solution(array, height) {
  let count = 0;
  
  for(let i=0; i<array.length; i++) {
    if(array[i] > height) count = count + 1;
  }
  return count;
}

console.log(solution(array, 170));