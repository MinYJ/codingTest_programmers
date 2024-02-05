function solution(n) {
    const array = Array(200).fill().map((v,i)=>{
        return i+1;
    });
    let result = array.filter(v=>v%3!=0);
    result = result.filter(v=>v.toString().includes("3") == false);
    return result[n-1];
}