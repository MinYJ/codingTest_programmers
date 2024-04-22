function solution(rny_string) {
    return parser_loop(rny_string)
}

function parser(str, word = '') {
    if(str === '') return word        

    const set = new Set('m');
    if(set.has(str.slice(0,1))) word += 'rn'; 
    else word += str.slice(0,1);
    return parser(str.slice(1),word)
}

function parser_loop(str) {
    const set = new Set('m');
    
    let word = '';
    while(str !== '') {
        if(set.has(str.slice(0,1))) word += 'rn'; 
        else word += str.slice(0,1);
        str = str.slice(1)
    }
    
    return word
}