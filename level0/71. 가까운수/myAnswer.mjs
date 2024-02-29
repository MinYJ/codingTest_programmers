function solution(array, n) {
    array.sort((after,before)=>{
        // return (Math.abs(n-after) - Math.abs(n-before) == 0) ? after - before : Math.abs(n-after) - Math.abs(n-before);
        return Math.abs(n-after) - Math.abs(n-before) || after - before; 
    })
    
    return array[0];
}

const array = [3, 10, 28];
const n = 20;