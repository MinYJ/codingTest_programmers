function solution(strArr) {
    strArr = strArr.map((v,i)=>v.length);
    
    let map = new Map();
    for(let ele of strArr) {
        map.set(ele, (map.get(ele)||0) + 1)
    }
    //return [...map].sort((a,b)=>b[1]-a[1])[0][1];
    return Math.max(...map.values())
    console.log(map.values())
    console.log(map.values())
    console.log(map.keys())
    
}