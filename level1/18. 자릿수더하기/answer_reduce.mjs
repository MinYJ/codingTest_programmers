function solution(n)
{
    n = n.toString().split('');

    const sum = n.reduce(function(accumulator, currentValue) {
      console.log(accumulator);
      console.log(currentValue);
      //return accumulator + parseInt(currentValue);
    }, 0);
    
    return sum;
}

console.log(solution(123));