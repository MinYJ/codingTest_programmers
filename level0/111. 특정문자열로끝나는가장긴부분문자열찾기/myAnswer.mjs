function solution(myString, pat) {
    const limit = myString.length - pat.length + 1;
    
    let index = -1;
    for(let i=0; i<limit; i++) {
        if(myString.slice(i,pat.length+i) === pat) index = i + pat.length;
    }
    
    return myString.slice(0, index)
}