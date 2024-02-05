function solution(emergency) {
    let array = [];
    for(const ele of emergency){
        array.push(ele);
    }
    array.sort((a,b)=>b-a);
    emergency.forEach((v,i)=>{
        array.forEach((aV,aI)=>{
            if(v === aV) {
                emergency[i] = aI + 1;
            }
        })
    })
    return emergency
}