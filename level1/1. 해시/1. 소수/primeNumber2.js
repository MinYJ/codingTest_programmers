/*
* 방법1 Set 개체
function solution(arr) {
    let max = arr.length / 2;
    let poketmon = [...new Set(arr)];
    let count = (max >= poketmon.length) ? poketmon.length : max;
    console.log('max: ' + max);
    console.log('poketmon: ' + poketmon);
    console.log(count);
    return count;
}
*/

/*
* 방법2 includes
function solution(arr) {
    let answer = [];
    let max = arr.length / 2;
    let count;
    arr.forEach((value, idx)=> {
        if(!answer.includes(value)) {
            answer.push(arr[idx]);
        }
    })
    console.log(max);
    count = (max >= answer.length) ? answer.length : max;
    return count;
}
*/

/*
* 방법3 indexOf
function solution(arr) {
    let answer = [];
    let max = arr.length / 2;
    let count;

    arr.forEach((value, idx)=>{
        if (answer.indexOf(arr[idx]) == -1) {
            answer.push(arr[idx]);
        }
    })

    console.log(answer);
    count = (max >= answer.length) ? answer.length : max;
    return count;
}
*/

/*
* 방법4 모든함수 내가 만들어서 작성
function solution(arr) {
    let answer = [];
    let max = arr.length / 2;
    let check = 0;
    let count;
    answer.push(arr[0]);
    arr.forEach((value, idx)=>{
        for (let i=0; i<answer.length; i++) {
            if (value == answer[i]) {
                check += 1;
            }
        }
        if(check == 0) answer.push(value);
        check = 0;
    });
    count = (max >= answer.length) ? answer.length : max;
    return count;
}
*/
let arr = [3, 3, 3, 2, 2, 2];
console.log(solution(arr));

