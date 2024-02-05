function solution(n) {
    const array = [];
    let number = (n%2==0)? n-1 : n;
    while(number > 0) {
        array.unshift(number);
        number = number - 2;
    }
    return array;
}