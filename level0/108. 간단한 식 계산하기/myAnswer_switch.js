function solution(binomial) {
    binomial = binomial.split(' ');
    let sum;
    switch(binomial[1]) {
        case '+':
            sum = Number(binomial[0]) + Number(binomial[2]); 
            break;
        case '-':
            sum = Number(binomial[0]) - Number(binomial[2]); 
            break;
        case '*':
            sum = Number(binomial[0]) * Number(binomial[2]); 
            break;
    }
    return sum
}