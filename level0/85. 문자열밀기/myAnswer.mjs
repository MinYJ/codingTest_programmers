function solution(A, B) {
    let string = [...Array(A.length)];
    let jump = 0;
    while(jump < A.length) {
        for(let i=0; i<A.length; i++) {
            const stringIndex = (i+jump)%A.length;
            string[stringIndex] = A[i];
        }
        
        if(string.join("") === B) return jump;
        jump += 1;
    }
    return -1
}