function solution(binomial) {
    const ops = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b
    }
    
    const [a,op,b] = binomial.split(' ');
    console.log(a)
    console.log(b)
    console.log(op)
    
    return ops[op](Number(a),Number(b))   
}