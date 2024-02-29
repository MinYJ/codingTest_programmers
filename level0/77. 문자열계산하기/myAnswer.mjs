function solution(my_string) {
    my_string = my_string.replaceAll(' ', '');
    return calculator(my_string);
}

function calculator(string, result = 0, array = [], number = '') {    
    if(string.slice(0,1) === '+' || string.slice(0,1) === '-') {
        array.push(Number(number));
        number = '';
        array.push(string.slice(0,1));
    } else number = number + string.slice(0,1)
    
    if(array.length >= 3) {
        result = (array[1] === '+') ? (array[0] + array[2]) : (array[0] - array[2]);
        array = [result, array.pop()]

    }
    if(string === '') {
        array.push(Number(number));
        result = (array[1] === '+') ? (array[0] + array[2]) : (array[0] - array[2]);
        return result
    }
    return calculator(string.slice(1), result, array, number)
}
