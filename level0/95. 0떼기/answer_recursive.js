function solution(n_str) {
    return parser(n_str);
}

function parser(str) {
    if(str.slice(0,1) != 0) return str
    return parser(str.slice(1))
}