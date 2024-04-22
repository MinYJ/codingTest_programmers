function solution(rank, attendance) {
    const attendanceStudent = rank.filter((v,i)=>attendance[i]).sort((a,b)=>a-b);
    const scoreArray = [10000, 100, 1];
    
    const answer = scoreArray.reduce((sum,cur,index)=>{
        return cur * rank.indexOf(attendanceStudent[index]) + sum
    }, 0)
    
    return answer
}