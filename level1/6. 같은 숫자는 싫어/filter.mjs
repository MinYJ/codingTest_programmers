function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

function test(arr) {
    return arr.filter((val, index) => val > 5);
}

const array = [5,6,7,8];
const result = test(array);
console.log(result);