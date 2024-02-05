function solution(polynomial) {
    const variableX = polynomial.split(" ").filter(v=> v.indexOf('x') > -1);
    const numbers = polynomial.split(" ").filter(v=>!isNaN(Number(v)));
    let sumX = (variableX.length > 0) ? variableX.reduce((acc,cur)=>{
        cur = (cur === 'x') ? '1x' : cur;
        return acc + Number(cur.slice(0,cur.indexOf('x')))
    },0)+'x' : "";
    sumX = (sumX == '1x') ? 'x' : sumX; 
    let sumNumber = (numbers.length > 0) ? numbers.reduce((acc, cur)=>{
        return acc + Number(cur);
    },0) : "";

    let answer;
    if(sumX == ""){
        if(sumNumber == "") {
            answer = "";
        } else {
            answer = sumNumber.toString();
        }
    } else {
        if(sumNumber == "") {
            answer = sumX.toString();
        } else {
            answer = sumX + ' ' + '+' + ' ' + sumNumber;
        }
    }
    return answer;
    
}