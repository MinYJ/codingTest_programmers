function solution(num_list, n) {
    let answer = [];
    
    num_list.forEach((value,index)=>{
        const quotient = Math.floor(index/n);
        const remainder = index%n;     
        
        if(remainder === 0) answer.push([]);
        answer[quotient].push(value);
    })
    return answer;
}