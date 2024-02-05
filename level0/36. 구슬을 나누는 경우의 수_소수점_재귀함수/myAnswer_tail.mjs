function solution(balls, share) {
    return Math.round(factioral(balls) / (factioral(balls - share) * factioral(share)));
}

function factioral(start, sum = start) {
    if(start <= 1) return (start == 0) ? 1 : sum * 1;
    else return factioral(start-1, sum * (start-1));
}