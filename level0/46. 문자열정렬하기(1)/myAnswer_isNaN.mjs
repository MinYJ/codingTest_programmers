function solution(my_string) {
    const result = Array.from(my_string).filter(ele => {
        return !isNaN(Number(ele));
    }).map(v=>Number(v));
    result.sort((a,b)=> a-b);
    return result;
}

console.log(parseInt('a'));