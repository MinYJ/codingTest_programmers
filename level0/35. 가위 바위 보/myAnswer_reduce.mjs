function solution(rsp) {
    const table = { "2": 0, "0": 5, "5": 2};

    rsp.split('').reduce((acc, cur)=>{
        return acc + table[cur.toString()];
    }, "");
}

console.log(solution("205"));