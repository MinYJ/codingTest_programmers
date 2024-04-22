function solution(myString, pat) {
    return parser_loop(myString).includes(pat) ? 1 : 0
}

function parser(str, word = '') {
    if(str === '') return word
    
    if(str.slice(0,1) === 'A') word += 'B';
    else word += 'A';
    
    return parser(str.slice(1), word)
}

function parser_loop(str) {
    let word = ''
    while(str !== '') {
        if(str.slice(0,1) === 'A') word += 'B';
        else word += 'A';
        
        str = str.slice(1)
    }
    return word
}