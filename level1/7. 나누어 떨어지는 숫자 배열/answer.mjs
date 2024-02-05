function solution(arr, divisor) {
  const answer = arr.filter((value, index) => value % divisor == 0)
  return answer.length == 0 ? [-1] : answer.sort((a,b) => b-a);
}

const arr = [5,9,7,10]
console.log(solution(arr, 5));