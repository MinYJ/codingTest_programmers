function solution(dots) {
    // 1. [x1,y1]을 기준으로 가장 차이가 많이 나는 값을 구한다
    let xArray = [];
    let yArray = [];
    dots.forEach((v,i)=>{
        xArray.push(v[0]);
        yArray.push(v[1]);
    })
    xArray = [...new Set(xArray)].sort((a,b)=> b-a);
    yArray = [...new Set(yArray)].sort((a,b)=> b-a);
    const width = xArray[0] - xArray[1] ;
    const height = yArray[0] - yArray[1];
    
    return width * height;
}
