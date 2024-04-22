function solution(arr, flag) {
    const result = flag.reduce((array, cur, idx)=>{
        if(cur) {
            for(let i=0; i<arr[idx]*2; i++) {
                array.push(arr[idx])
            }
        }
        else {
            for(let i=0; i<arr[idx]; i++) {
                array.pop(arr[idx])
            }             
        }
        return array
    }, []);
    return result
}