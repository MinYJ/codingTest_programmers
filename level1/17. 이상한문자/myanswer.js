function solution(s) {
  let answer = '';
  let words = s.split(' ');
  
  for(let index = 0; index < words.length; index++) {
     for(let i=0; i < words[index].length; i++) {
          if(i%2 == 0) {
              answer += words[index][i].toUpperCase();        
          }
          else {
              answer += words[index][i].toLowerCase();
          } 
      }
      if(index < words.length - 1) answer += ' ';

  }
  return answer;
}

