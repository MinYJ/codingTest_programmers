function solution(arr) {
    // 같으면 마지막 원소제거
    // 다르면 마지막에 원소추가

    const result = arr.reduce((newArray, cur)=>{
        if(newArray.length === 0) {newArray.push(cur); return newArray}
        if(newArray[newArray.length-1] === cur) newArray.pop()
        else newArray.push(cur)
        return newArray
    }, []);
    return (result.length === 0) ? [-1] : result
}