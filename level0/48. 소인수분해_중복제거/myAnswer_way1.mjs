function solution(n) {
    let array = [];
    let number = 2;
    while(n!=1){
        if(!isPrimeNumber(n)) number = number + 1;
        else {
            if(n%number==0) {
                n = Math.floor(n / number);
                array.push(number);   
            } else {
                number = number + 1;
            }
        }
    }

    return  [...new Set(array)];
}

function isPrimeNumber(n){
    let number = 2;
    while(n <= Math.sqrt(n)) {
        if(n%number==0) return false;
        number = number+1;
    }
    return true;
}