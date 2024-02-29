function solution(my_string, num1, num2) {
    var answer = '';

    let arr = my_string.split("");
    let tmp1 = my_string[num1];
    let tmp2 = my_string[num2];
    arr.splice(num1, 1, tmp2);
    arr.splice(num2, 1, tmp1);
    answer = arr.join("");

    return answer;
}