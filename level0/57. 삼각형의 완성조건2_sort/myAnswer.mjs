function solution(sides) {
    checkValidation(Math.max(sides[0],sides[1]), Math.min(sides[0],sides[1]), 1);
    
    let array = [];
    
    for(let i=1; i<=Math.max(sides[0],sides[1]); i++){
        const condition = Math.min(sides[0],sides[1]) + i;
        if(condition > Math.max(sides[0],sides[1])) array.push(i); 
    }
    
    for(let i=Math.max(sides[0],sides[1])+1; i<(sides[0] + sides[1]); i++){
        array.push(i);
    }
    return array.length;
}