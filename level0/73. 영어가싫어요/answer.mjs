function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
        numbers.split(number[i]);
        console.log(numbers);
    }
    return +numbers
}

solution("onefour");


// console.log('fourone'.split('one').join(1));
// console.log('fourone'.split('one').join(1).split('one'));

// const array = ['','four','']
// console.log(array.join(`+`));
