function solution(array) {
    return parser(array.join(""))
}

function parser(string, result = 0) {
    if(string.slice(0,1) === '7') result = result + 1;
    if(string === '') return result
    return parser(string.slice(1), result);
}