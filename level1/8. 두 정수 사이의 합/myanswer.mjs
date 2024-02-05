function solution(a, b) {
  let start = 0;
  let end = 0;
  if ((a - b) > 0) {
      start = b;
      end = a + 1;
  } else {
      start = a;
      end = b + 1;
  }
  let sum = 0;
  for(let i = start; i < end; i++) {
      sum = sum + i;
  }
  
  return sum;
}