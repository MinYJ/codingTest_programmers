function solution(a, b) {
    const cases = [(a,b)=>Math.abs(a-b), (a,b)=>2*(a+b), (a,b)=>a**2+b**2]
    const array = [a,b];
    const index = array.filter(v=>v%2!==0).length;
    
    return cases[index](a,b)
}