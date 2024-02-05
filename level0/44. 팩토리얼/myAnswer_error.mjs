//1.
/*
function test(num){
    test_2(num)
}

function test_2(num){
    test_3(num)
}

function test_3(num) {
    return 2;
}
console.log(test(2));
*/

//2.
function solution(n) {
    const result = factorial(2);
    console.log(result);
}

function factorial(number, sum=number){
    if(number<=1) {
        return sum;
    }
    console.log(`팩토리얼: ${number}`);
    factorial(number-1, sum*(number-1)); 
    return 1
}