function solution(n) {
  let arr = Array(n + 1).fill(true);

  arr[0] = false;
  arr[1] = false;
  
  for(let i= 2; i * i <= n; i++) {
    if(arr[i]) {
      for(let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  
  console.log(arr.filter(el => el === true));
}
solution(5);