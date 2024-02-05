function solution(n) {
  const number = Math.sqrt(n);
  if(number === parseInt(number)) return (number+1) ** 2
  else return -1
}