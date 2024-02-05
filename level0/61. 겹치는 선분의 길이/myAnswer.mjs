function solution(lines) {
    [line1, line2, line3] = lines;
    const line1_line2 = getDuplicateLength(line1, line2);
    const line1_line3 = getDuplicateLength(line1, line3);
    const line2_line3 = getDuplicateLength(line2, line3);
    
    //const array = [...new Set([...line1_line2, ... line1_line3, ...line2_line3])];
    const array = [...line1_line2, ... line1_line3, ...line2_line3];
    
    const type = array.length.toString();
    console.log(type);
    let answer;
    switch(type) {
        case "0":
            answer = 0;
            break;
        case "2":
            answer = array[1] - array[0];
            break;
        case "4":
            answer = (array[1] - array[0]) + (array[3] - array[2]);
            break;
        case "6":
            array.sort((a,b)=> a-b)
            answer = array[5] - array[0];
            break;
        default:
            console.log(`오류`);
    }
    return answer;
}
function getDuplicateLength(before, after){
    const before_start = Number(before[0]);
    const before_end = Number(before[1]);
    const after_start = Number(after[0]);
    const after_end = Number(after[1]);
    
    let array = [];
    if(compareNumber(before_start, after_start) === "beingSmall" && compareNumber(before_end, after_start) === "beingBig" && compareNumber(before_end, after_end) !== "beingBig") {array.push(after_start); array.push(before_end);}
    else if(compareNumber(before_start, after_start) === "beingSmall" && compareNumber(before_end, after_start) === "beingBig" && compareNumber(before_end, after_end) === "beingBig"){array.push(after_start); array.push(after_end);}
    else if(compareNumber(before_start, after_start) === "beingBig" && compareNumber(before_start, after_end) === "beingSmall" && compareNumber(before_end, after_end) !== "beingBig") {array.push(before_start); array.push(before_end);}
    else if(compareNumber(before_start, after_start) === "beingBig" && compareNumber(before_start, after_end) === "beingSmall" && compareNumber(before_end, after_end) === "beingBig") {array.push(before_start); array.push(after_end);}
    else if(compareNumber(before_start, after_start) === "beingSame" && compareNumber(before_end, after_end) === "beingBig") {array.push(before_start); array.push(after_end);} 
    else if(compareNumber(before_start, after_start) === "beingSame" && compareNumber(before_end, after_end) === "beingSmall"){array.push(before_start); array.push(before_end);}
    else if(compareNumber(before_start, after_start) === "beingSame" && compareNumber(before_end, after_end) === "beingSame"){array.push(before_start); array.push(before_end);}
    
    return array;
}

function compareNumber(before, after) {
    if(before < after) {
        return "beingSmall";
    } else if(before > after) {
        return "beingBig";
    } else
        return "beingSame";
}


/*
line1_start 작은경우 -> line1_end가 line2_start보다 같거나작은경우 -> 아예 만나지않음
line1_start 작은경우 -> line1_end가 line2_start보다 큰경우 ->  line1_end가 line2_end보다 같거나작은경우 -> line2_start부터 line1_end까지
line1_start 작은경우 -> line1_end가 line2_start보다 큰경우 ->  line1_end가 line2_end보다 큰경우 -> line2_start부터 line2_end까지

line1_start 큰경우 -> line1_start가 line2_end보다 같거나큰경우 -> 아예 만나지 않음
line1_start 큰경우 -> line1_start가 line2_end보다 작은경우 -> line1_end가 line2_end보다 같거나
작은경우 -> line1_start부터 line2_end까지
line1_start 큰경우 -> line1_start가 line2_end보다 작은경우 -> line1_end가 line2_end보다 큰경우 -> line1_start부터 line2_end까지

line1_start 같은경우 -> line1_end이 line2_end 보다 큰 경우 -> line1_start부터 line2_end까지
line1_start 같은경우 -> line2_end이 line1_end 보다 큰 경우 -> line1_start부터 line1_end까지
*/