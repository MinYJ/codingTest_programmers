function solution(n) {
    let sum = 0;
    n = (n%2==0) ? n : n-1;
    while(0 < n) {
        sum = sum + n;
        n = n - 2;
    }
    
    return sum;
}