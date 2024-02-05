function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

const answer = "BCA".split("B").join('');
console.log(answer);

