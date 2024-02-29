function solution(n) {
    let number = 2;
    while(number**2 <= n){
        if(number**2 == n) return 1
        number = number + 1;
    }
    return 2
}