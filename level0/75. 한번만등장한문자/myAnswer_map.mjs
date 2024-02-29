function solution(s) {
    let stringMap = new Map();
    [...s].map(v=>{
        return stringMap.set(v, (stringMap.get(v)||0)+1);
    })
    
    let array = [...stringMap];
    array = array.reduce((acc,cur)=>{
        return (cur[1] === 1) ? [...acc, cur[0]] : acc;
    },[]);
    
    return array.sort().join("")
}