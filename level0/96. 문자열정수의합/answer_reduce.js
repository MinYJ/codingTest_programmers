function solution(num_str) {
    const answer = [...num_str].reduce((sum,cur)=>{
       return sum+Number(cur) 
    },0)
    return answer
}