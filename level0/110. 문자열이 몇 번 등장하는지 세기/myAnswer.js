function solution(myString, pat) {
    const limit = myString.length - pat.length;
    if(limit < 0) return 0;
    let count = 0;
    for(let i=0; i<=limit; i++) {
        if(myString.slice(i, pat.length + i) === pat) count += 1;
    }
    return count
}
