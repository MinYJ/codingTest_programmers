function solution(my_string) {
    my_string = [...my_string];
    let number = my_string[0];
    let array = [];
    
    for(let i=1; i<my_string.length; i++){  
        if(!isNaN(Number(number[0]))) {
            number = number + my_string[i];
            if(isNaN(Number(number[number.length-1]))) {
                array.push(Number(number.slice(0,-1)));
                number = my_string[i];
            }
            if(i == (my_string.length-1)) {
                if(!isNaN(Number(my_string[i]))) {
                    array.push(Number(number));
                }
            }
        } else {
            number = my_string[i];
            if(i == (my_string.length-1)) {
                if(!isNaN(Number(my_string[i]))) {
                    array.push(Number(number));
                }
            } 
        }    
    }
    const result = array.reduce((acc,cur)=>acc+cur,0) 
    return result;
}