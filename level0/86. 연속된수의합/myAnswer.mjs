function solution(num, total) {
    let answer = [...Array(num)];
    let average = Math.ceil(total/num);
    let array = [average];
    if(num%2==1) {
        const count = (num-1)/2;
        for(let i=1; i<=count; i++) {
            array.push(average-i)
            array.push(average+i)
        }
    } else {
        const count = num/2;
        for(let i=1; i<=count; i++) {
            array.push(average-i)
        }
        for(let i=1; i<count; i++) {
            array.push(average+i)
        }
    }
    return array.sort((a,b)=>a-b)
}