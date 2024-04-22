function solution(num_str) {
    return parser(num_str)
}
function parser(str, sum = 0) {
    sum = sum + Number(str.slice(0,1));
    
    if(str === '') return sum
    return parser(str.slice(1), sum)
}