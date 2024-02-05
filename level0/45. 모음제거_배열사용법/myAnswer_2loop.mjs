function solution(my_string) {
    const obj = ['a', 'e', 'i', 'o', 'u'];
    my_string = [...my_string];
    for(let i=0; i<my_string.length; i++) {
        obj.forEach((v,iObj)=>{
            if(my_string[i] === v){
                my_string.splice(i,1);
                i = i-1;
            }
        })
    }
    
    return my_string.join("");
}