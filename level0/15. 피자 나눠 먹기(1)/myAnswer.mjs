function solution(n) {
    const quotient = Math.floor(n/7);
    const remainder = n%7;
    const answer = (n%7) ? quotient+1 : quotient;
    
    return answer;
}