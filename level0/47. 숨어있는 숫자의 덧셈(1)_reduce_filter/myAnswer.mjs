function solution(my_string) {
    const result = [...my_string].filter(v=>!isNaN(Number(v)))
    .reduce((acc,cur)=>{
        return acc+Number(cur);
    }, 0);
    
    return result;
}

console.log(+'2');