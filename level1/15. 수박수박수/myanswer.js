function solution(n) {
  let quota = Math.floor(n / 2);
  let remainder = n % 2;
  let answer = '';
  
  while(0 < quota) {
      answer += '수박';
      quota--;
  }
  
  if(remainder === 1) answer += '수'; 
  return answer;
  
}
solution(11);