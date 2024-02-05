function solution(slice, n) {
    let pizza = 1;
    let number = slice;

    while(number < n) {
        pizza = pizza + 1;
        number = slice + number;
        
        console.log("pizza: ", pizza);
        console.log("number: ", number);
    }
    return pizza;
}

solution(2, 100);