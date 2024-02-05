function solution(n) {
    let number = 1;
    while(true) {
        if(factorial(number) > n) break;
        number = number + 1;
    }
    return number - 1;
}

function factorial(number, sum=number){
    if(number<=1) return sum;
    return factorial(number-1, sum*(number-1)); 
}