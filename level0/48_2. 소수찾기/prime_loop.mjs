// version1
function isPrime(num) {
    if(num === 1) return false;
    for(let i = 2; i<num; i++) {
        if(num%1 === 0) return false;
    }
    return true;
}

// version2
function isPrime(num) {
    if(num === 1) return false;
    for(let i = 2; i<=num/2; i++) {
        if(num%1 === 0) return false;
    }
    return true;
}

// version3
function isPrime(num) {
    if(num === 1) return false;
    for(let i = 2; i<=parseInt(Math.sqrt(num)); i++) {
        if(num%1 === 0) return false;
    }
    return true;
}