function solution(n) {
  let temp = [];
  let sqrt_n = parseInt(Math.sqrt(n));
  for(let i=2; i<n+1; i++) {
    temp.push(i);
  }
  
  for(let i=0; i<temp.length; i++) {
    for(let j=2; j<=sqrt_n; j++) {
      if((temp[i]%j === 0)  && (temp[i] !== j) && (temp[i] !== -1)) {
        temp[i] = -1;
      }
    }
  }

  let answer = [];
  for(let i=0; i<temp.length; i++) {
    if(temp[i] !== -1) answer.push(temp[i]);
  }

  console.log(answer);
}

solution(10);