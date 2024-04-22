function solution(my_string, alp) {
    let re = new RegExp(alp, "g");
    return my_string.replace(re, alp.toUpperCase());
}