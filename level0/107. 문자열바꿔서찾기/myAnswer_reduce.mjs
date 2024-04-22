function solution(myString, pat) {
    const word = [...myString].reduce((word, char)=>{
        if(char === 'A') word += 'B';
        else word += 'A';
        return word
    }, '');
    
    return word.includes(pat) ? 1 : 0
}