function solution(dot) {
    const obj = {'++': 1, '-+': 2, '--': 3, '+-': 4};
    dot.map((v,i)=>{
        if(v>0){
            dot[i] = '+';
        }else{
            dot[i] = '-'
        }
    })
    return obj[dot.join("")];
}