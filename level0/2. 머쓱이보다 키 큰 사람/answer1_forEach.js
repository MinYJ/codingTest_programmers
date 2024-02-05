const array = [149, 180, 192, 170];

function solution(array, height) {
  let count = 0;
  
  array.forEach((value, index)=> {
    if (value > height) count = count + 1;
  });

  return count;
}

console.log(solution(array, 170));