function solution(bin1, bin2) {
    bin1 = [...bin1];
    bin2 = [...bin2];
    const length = Math.max(bin1.length, bin2.length);
    
    let array = [];
    let number = 0;
    while(length > number) {
        let before = bin1.pop();
        let after = bin2.pop();
        console.log(`before: ${before}_after: ${after}`);
        before = (before === undefined) ? "0" : before;
        after = (after === undefined) ? "0" : after;
        array.push(`${before}_${after}`);
        number = number + 1;
    }
    
    const calculator = {"1_1":"10", "1_0":"1", "0_1":"1", "0_0":"0", "10_1":"11", "10_0":"10"};
    console.log(array);
    const result_obj = array.reduce((acc,cur,idx)=>{
        const binaryPlus = calculator[`${calculator[cur]}_${acc["value"]}`];
        acc["value"] = (binaryPlus.length > 1) ? binaryPlus[0] : "0";
        acc["result"] = (binaryPlus.length > 1) ? binaryPlus[1] + acc["result"] : binaryPlus + acc["result"];
        
        if(idx === array.length - 1) acc["result"] = (acc["value"] === "0") ? acc["result"] : acc["value"] + acc["result"];
        return acc;
    },{"value": "0", "result": ""});

    return result_obj["result"]
}