function solution(arr)
{    
    let answer_array = [];
    let number = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(number === arr[i]) {

            continue;
        } else {
            if(answer_array[answer_array.length-1] !== number) {
                answer_array.push(number);
            } 
            answer_array.push(arr[i]);
            
            number = arr[i];
        }
    }
    if(answer_array.length === 0) answer_array.push(number);
    return answer_array
}

const arr= [1,1]
solution(arr);