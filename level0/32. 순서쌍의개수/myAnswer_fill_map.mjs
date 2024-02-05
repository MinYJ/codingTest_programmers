const result = Array(100).fill(1).map((v,idx)=> v + idx).filter(v => 100 % v == 0).length;
console.log(result);