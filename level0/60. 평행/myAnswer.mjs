function solution(dots) {
    const dotsMap = new Map();
    dots.forEach((v,i)=>{
        dotsMap.set(i,v);
    })
    for(let i=0; i<dots.length; i++){
        for(let j=i+1; j<dots.length; j++){
            let dotsArrayIndex = [0,1,2,3];
            const otherDotsIndex = dotsArrayIndex.filter(v=>v!==i && v!==j);
            
            let lineX = (dots[i][0] - dots[j][0]);
            let lineY = (dots[i][1] - dots[j][1]);
            let line = lineY / lineX;
            
            let anotherLineX = (dots[otherDotsIndex[0]][0] - dots[otherDotsIndex[1]][0]);
            let anotherLineY = (dots[otherDotsIndex[0]][1] - dots[otherDotsIndex[1]][1]);
            let anotherLine = anotherLineY / anotherLineX;
            
            if(line === anotherLine) return 1; 
        }
    }
    return 0;
}