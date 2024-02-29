function solution(babbling) {
    const answer = babbling.map(v=>parser(v)).reduce((acc,cur)=>acc+cur);

    return answer
}

function parser(string, result = 0, word = '') {
    const set = new Set(["aya", "ye", "woo", 'ma']);
    word += string.slice(0,1);
    if(set.has(word)) {
        result += 1;
        word = '';
    }
    
    if(string == '')  return (word === '') ? 1 : 0
    else return parser(string.slice(1), result, word);
}