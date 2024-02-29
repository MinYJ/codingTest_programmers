function solution(arr) {
    const column = arr.length
    const row = arr[0].length;
    if(column === row) return arr
    if(column > row) {
        const extraCount = column - row;
        arr.forEach((v,i)=>{
            for(let j=0; j<extraCount; j++) {v.push(0)}
        })
    } else {
        let extraCount = row - column;
        for(let j=0; j<extraCount; j++) {
            let array = [];
            for(let i=0; i<arr[0].length; i++) {array.push(0)}
            arr.push(array);                        
        }
    }
    return arr
}