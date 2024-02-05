const result = Array(10).fill().map((v,i)=> i+1).filter((v)=> v%2 === 0).reduce((acc, cur) => acc + cur, 0);

console.log(result);