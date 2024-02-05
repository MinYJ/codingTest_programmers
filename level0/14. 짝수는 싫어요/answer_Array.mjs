const number = 5;
const result = Array.from({ length: number}, (a,i)=>i+2)
                    .filter(i => i % 2 !==0)
console.log(result);
