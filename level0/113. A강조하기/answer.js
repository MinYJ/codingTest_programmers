function solution(myString) {
    const result = [...myString].map((v,i)=>{
        if(v === 'a') return v.toUpperCase();
        if(v.charCodeAt() > 65 && v.charCodeAt() < 91) return v.toLowerCase()
        return v;
    }).join("");
    
    return result;
}