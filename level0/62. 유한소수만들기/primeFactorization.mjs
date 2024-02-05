function primeFactorization(n){
    let number = 2;
    let array = [];
    while(n != 1) {
        if(n%number == 0) {
            array.push(number);
            n = Math.floor(n/number);
        } else {
            number = number + 1;
        }
    }
    array = [...new Set(array)];
    return array;
} 