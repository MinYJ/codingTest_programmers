function solution(n)
{
    n = n.toString().split('');

    let sum = 0;
    for(const a of n) {
        sum = sum + parseInt(a);
    }
    
    return sum;
}

const word = 'abc';
const test = ['a', 'b', 'c'];
console.log(test.join(''));