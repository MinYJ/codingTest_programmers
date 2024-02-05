function solution(arr, divisor) {
  const result = [];
  
  /* 나누어지는 값 확인*/
  arr.forEach((value, index) => {
      if(value % divisor == 0) result.push(value);
  });
  
  /* 나누어진 수가 하나도 없는 경우 */
  if(result.length == 0) result.push(-1);
  /* 오름차순 정렬하기 */
  else {
      for(let i=0; i<result.length; i++) {
          for(let j=0; j<result.length-i-1; j++) {
              if(result[j] > result[j+1]) {
                  const temp = result[j];
                  result[j] = result[j+1];
                  result[j+1] = temp;
              }
          }
      }
  }
  return result;
}