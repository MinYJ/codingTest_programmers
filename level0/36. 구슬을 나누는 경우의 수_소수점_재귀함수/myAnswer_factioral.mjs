function solution(balls, share) {
    return Math.round(factioral(balls) / (factioral(balls - share) * factioral(share)));
}

function factioral(start) {
    if(start <= 1) return 1;
    else return factioral(start-1) * start;
}