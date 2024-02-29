function solution(arr){
    let n = Math.max(arr.length, Math.max(...arr.map(v=>v.length)));
    for(let a of arr) while(a.length<n) a.push(0);
    while(arr.length < n) arr.push(Array(n).fill(0));
    return arr;
}

// const arr = [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]];
const arr = [[57, 192, 534, 2], [9, 345, 192, 999]];