function solution(s) {
    let formerNumber = 0;
    const result = s.split(" ").reduce((acc, cur)=>{
        if(isNaN(Number(cur))) cur = formerNumber;
        else formerNumber = Number(-cur);
                
        return acc + Number(cur);
    }, 0);
    
    return result;
}