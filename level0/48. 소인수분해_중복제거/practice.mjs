function solution() {
    
}
function isPrimeNumber(n) {
    let number = 2;
    while(number <= Math.sqrt(n)) {
        if(n%number===0) return false;
        number = number + 1;
    }
    return true;
}