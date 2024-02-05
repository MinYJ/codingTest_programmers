function solution(my_string, letter) {
    my_string = [...my_string];
    
    for(let i=0; i<my_string.length; i++) {
        if(my_string[i] === letter) {
            my_string.splice(i,1);
            i = -1;
        }
    }
    return my_string.join("");
}
console.log('B: ', solution("BBBC","B"));