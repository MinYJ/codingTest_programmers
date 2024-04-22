function solution(strArr) {
    strArr = strArr.map((v,i)=>v.length);
    console.log(strArr)
    const answer = strArr.reduce((acc,cur)=>{
        acc.hasOwnProperty(cur) ? acc[cur] += 1 : acc[cur] = 1;
        return acc
    },{})
    console.log(answer);
}