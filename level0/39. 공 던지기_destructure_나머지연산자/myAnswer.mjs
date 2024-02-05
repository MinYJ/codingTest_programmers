function solution(numbers, k) {
    k = 2*(k-1);
    let index = k%numbers.length;
    return numbers[index];
    
    // 1. k-1은 한 이유는 처음에는 0부터시작하기때문이다
}