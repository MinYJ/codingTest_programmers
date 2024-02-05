function solution(rsp) {
    const table = { "2": 0, "0": 5, "5": 2};

    const result = [...rsp].map(v=>
        table[v]
    ).join("");

    return result;
}

console.log(solution("205"));