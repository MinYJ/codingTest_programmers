function solution(rsp) {
    const table = { "2": 0, "0": 5, "5": 2};
    let word = "";
    rsp.split('').map(v=>{
        word = word + table[v.toString()];
    })

    return word;
}

console.log(solution("205"));