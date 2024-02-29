function solution(n) {
    const sum = [...n.toString()].reduce((acc,cur)=>{
        return acc = acc + cur;
    }, 0);
}