// 기준숫자에서 빼면 기준숫자가 0으로 바뀜
// 1 2 3 4 5 6 --> 기준4
// -3 -2 -1 0 1 2

function solution(numlist, n) {
    let array = [];
    numlist.map(v=>{
        array.push(Math.abs(v-n));
    });
    array = [...new Set(array)];
    array.sort((after,before)=>after-before);
 
    const answer = array.reduce((acc,cur)=>{
        const plusNumber = cur+n;
        const minusNumber = (cur === 0) ? -1 : (cur*-1+n);
        if(numlist.includes(plusNumber)) acc.push(plusNumber);
        if(numlist.includes(minusNumber)) acc.push(minusNumber);
        return acc;
    },[]);
    return answer;
    
}