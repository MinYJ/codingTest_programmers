function solution(arr, delete_list) {
    const result = delete_list.reduce((newArr, cur)=>{
        if(newArr.indexOf(cur) !== -1) newArr.splice(newArr.indexOf(cur), 1)
        return newArr
    }, [...arr])
    
    return result
}