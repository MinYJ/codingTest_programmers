function solution(arr) {
    const howManyAddition = () => {
        let exponent = 1;
        let twoPow = 2;
        while(true) {
            if(twoPow >= arr.length) break;
            twoPow *= 2;
        }
        
        return twoPow - arr.length;
    }
    return (arr.length === 1) ? arr : [...arr, ...Array(howManyAddition()).fill(0)]
}