function solution(my_string, number="", array = []) {
    if(checkNumberType(my_string.slice(0,1))) number = number + my_string.slice(0,1); 
    if(number.length >= 1 && (checkNumberType(my_string.slice(0,1)) == false || my_string.slice(1) == "")) {array.push(Number(number)); number = ""};
    if(my_string.slice(1) == "") return array.reduce((acc,cur)=>acc+cur,0);
    return solution(my_string.slice(1), number, array);
}
function checkNumberType(char)  {
    return !isNaN(Number(char));
}
console.log(solution("aAb1B2cC34oOp"));