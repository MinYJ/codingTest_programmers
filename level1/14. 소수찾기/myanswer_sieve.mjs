const arr = Array.from({ length: 10}).fill(true)
arr[0] = arr[1] = false;
const sqrt = parseInt(Math.sqrt(n));

for(let i = 2; i <= sqrt; i++) {
  if(arr[i] === true) {
    for (let j = 2; i * j <= n; j++) {
      arr[i * j] = false;
    }
  }
  return arr.filter((v) => v === true).length;
}