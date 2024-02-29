function solution(numbers) {
    console.log(numberParser(numbers));
}

function numberParser(numbers, result='', word=''){
    const translationNumbers = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    
    if(translationNumbers[word] !== undefined) {
        result = result + translationNumbers[word];
        word = numbers.slice(0,1);
    } else {
        word = word + numbers.slice(0,1);
    } 
    if(numbers === '') return result;
    return numberParser(numbers.slice(1), result, word);
}