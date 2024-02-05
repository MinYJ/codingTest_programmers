function solution(words) {
  const number = Math.round(words.length / 2);
  const index = number - 1;
  if(words.length % 2 === 0) return words.substring(index, index+2);     
  else return words.substring(index, index+1);
}

const word = '123456789abcdef';
solution(word);