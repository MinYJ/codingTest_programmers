function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}

"21".map((v)=>{
    console.log(v);
})