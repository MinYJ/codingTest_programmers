const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';

const log = console.log;


function solutions(s, n) {
  let alphet_index = -1;
  let capital = false;
  let answer ='';

  for(const value of s) {
    if(value != ' ') {
      alphet_index = upper.indexOf(value);

      if(alphet_index > -1) {
        alphet_index += n;
        capital = true;
      } else {
        alphet_index = lower.indexOf(value);
        capital = false;
      }
  
      alphet_index = alphet_index % 26;
      
      if(capital) {
        answer += upper[alphet_index];
      } else {
        answer += lower[alphet_index];
      }
    } else {
      answer += ' ';
    }
  }
  return answer;
}

const arr = 'a B z'
console.log(solutions(arr, 1));