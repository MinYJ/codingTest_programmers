function solution(numbers, direction) {
    let array = Array(numbers.length).fill(0);

    numbers.map((v,i)=>{
        if(direction == "right") {
            const newIndex = (i+1)%numbers.length;
            array[newIndex] = v;
        } else {
            const newIndex = (i-1<0)?(numbers.length-1):(i-1)
            array[newIndex] = v;
        }
    })
    return array;
}