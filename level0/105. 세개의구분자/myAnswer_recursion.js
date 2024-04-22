function solution(myStr) {
    const result = parser_loop(myStr);
    return (result.length === 0) ? ['EMPTY'] : result
}

function parser(str, word = '', array = []) {
    const set = new Set(['a','b','c']);

    if(!set.has(str.slice(0,1))) word += str.slice(0,1);
    if(set.has(str.slice(0,1)) && word.length > 0) {
        array.push(word);
        word = '';
    }
    
    if(str === '') {
        if(word.length > 0) array.push(word)
        return array
    }
    return parser(str.slice(1), word, array)
}

function parser_loop(str) {
    const set = new Set(['a','b','c']);
    let word = '';
    let array = [];
    while(str !== '') {
        if(!set.has(str.slice(0,1))) word += str.slice(0,1);
        if(set.has(str.slice(0,1)) && word.length > 0) {
            array.push(word);
            word = '';
        }
        str = str.slice(1);
    }
    if(word.length > 0) array.push(word)
    return array
}