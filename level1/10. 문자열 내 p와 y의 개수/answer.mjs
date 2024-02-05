function solution(s) {
  [...s.toLowerCase()].reduce((acc, cur) => {
    console.log('acc', acc);
    console.log('cur', cur);
    if(cur === 'p') {
      console.log('p_return', acc + 1);
      return acc + 1;
    }
    console.log('return', acc);
    return acc;
  }, 0);
}

const s = 'pa';
solution(s);