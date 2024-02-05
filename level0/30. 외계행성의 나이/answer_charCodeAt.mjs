// 1
function solution(age) {
    let result = "";
    for (const ch of String(age)) {
        result += String.fromCharCode('a'.charCodeAt(0) + +ch)
    }
    return result;
}

// 2
function solution(age) {
    return age.toString().split('').map(n => String.fromCharCode(97+Number(n))).join('');
}