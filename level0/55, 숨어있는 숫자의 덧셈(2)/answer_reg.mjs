// (1)
function solution(array) {
    return array.split(/\D+/);
}

// (2)
function solution2(array) {
    return array.split(/[A-z]/g).reduce((acc,cur)=>{
        return acc + Number(cur);
    }, 0);
}
console.log(solution2("aA123b3"));