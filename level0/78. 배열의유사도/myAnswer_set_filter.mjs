function solution(s1, s2) {
    const set = new Set(s1);
    
    const result = s2.filter(v=>{
        return set.has(v)
    })
    return result.length
}