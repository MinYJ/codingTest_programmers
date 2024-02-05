function solution(s) {
  let array = s.split('');
  let answer = true;
  if(array.length === 4 || array.length === 6) {
      for(let i=0; i<array.length; i++) {
          const boolean = isNaN(array[i]);
          if(boolean) {
              answer = false;
              return answer;
          }
      }      
  } else {
      return false;
  }
  return answer;
}