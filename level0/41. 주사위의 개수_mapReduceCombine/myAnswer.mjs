function solution(box, n) {
    const answer = box.map((v)=> Math.floor(v/n))
    .reduce((acc,cur)=>{
        return acc * cur
    }, 1);
    
    return answer;
}