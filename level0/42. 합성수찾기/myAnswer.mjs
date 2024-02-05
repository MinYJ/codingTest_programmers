function solution(n) {
    let count = 0;
    while(n > 1) {
        if(!isPrimeNumber(n)) count = count + 1;
        n = n - 1;
    }
    return count;
}
    
function isPrimeNumber(n){
    let number = 2;
    while(number <= Math.sqrt(n)) {
        if(n%number === 0) return false
        number = number + 1;
    }
    return true;
}