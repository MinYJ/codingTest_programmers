function solution(n, k) {
    const quotient =  Math.floor(n / 10);
    k = (k > 0) ? k - quotient : 0;
    let price = 12000*n + 2000*k;
    
    return price;
}