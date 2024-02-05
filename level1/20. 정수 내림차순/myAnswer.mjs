function solution(n) {
  let string = n.toString();
  let arr = string.split('');
  
  arr.sort((a, b)=>{
      return Number(b) - Number(a);
  })
  
  arr = Number(arr.join(''))
  return arr;
}