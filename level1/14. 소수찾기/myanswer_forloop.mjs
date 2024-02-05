function solution(n) {
  let answer = [];
  for(let i=2; i<n+1; i++) {
    for(let j=2; j<i+1; j++) {
        if(i%j == 0) {
            if(i !== j) {
                break;
              }
        } else {
          continue;
        }
        answer.push(i);
    }
  }
  return answer.length;
}