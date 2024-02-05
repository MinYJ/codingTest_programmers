function solution(my_string, n) {
    let string = [...my_string];
    let array = [];
    for(const char of string){
        array.push(char.repeat(n));
    }
    
    return array.join("");
}

console.log(..."abc"[2]);