function solution(n_str) {
    const answer = [...n_str].reduce((acc,cur)=>{
        return (acc.slice(0,1) === '0') ? acc.slice(1) : acc 
    }, n_str);
    
    return answer
}