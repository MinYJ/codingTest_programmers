const array = [149, 180, 192, 170];

function solution(array, height) {
  let answer;
  
  answer = array.filter(value => value>height)

  return answer.length;
}

console.log(solution(array, 199));