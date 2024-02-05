function solution(a, b) {
    const denominator = primeFactorization(a);
    const numerator = primeFactorization(b);
    
    let duplicateArray = [];
    for(let i=0; i<denominator.length; i++) {
        for(let j=0; j<numerator.length; j++) {
            if(denominator[i] === numerator[j]) {
                denominator.splice(i,1);
                numerator.splice(j,1);
                i=i-1;
                j=j-1;
            }
        }
    }
    let answer;
    if(numerator.length === 0) answer = 1;
    else answer = (numerator.every((v,i)=>{return v==2||v==5}) === true) ? 1 : 2;
    return answer;
}

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
    return array;
} 