function solution(numbers, direction) {
    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    let answer = numbers;
    answer[1] = 5;
    console.log(numbers);
    console.log(answer);
}

console.log(solution([1,2,3], "right"));
