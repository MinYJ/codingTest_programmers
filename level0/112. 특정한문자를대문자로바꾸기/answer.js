function solution(my_string, alp) {
    const result = [...my_string].reduce((array,cur)=>{
        return (cur === alp) ? [...array, alp.toUpperCase()] : [...array, cur]
    },[]).join("");
    return result
}