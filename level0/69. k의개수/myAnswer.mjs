function solution(i, j, k) {
    let count = 0;
    for(let number = i; number<=j; number++){
        const isIncluded = number.toString().includes(k.toString());
        if(isIncluded) {
            const duplicateSum = `${number.toString()}_`.split(k.toString()).length - 1;
            count = count + duplicateSum;
        }
    }
    return count
}