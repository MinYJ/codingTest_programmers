const number = 3;
const result = Array(number).fill(1).map((v,i)=>v+i).filter(v=>v%2==1);;
console.log(result);