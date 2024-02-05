function solution(my_string) {
    const obj = ['a', 'e', 'i', 'o', 'u'];
    obj.map((v)=>{
        my_string = my_string.replaceAll(v,"");
    })
    return my_string
}