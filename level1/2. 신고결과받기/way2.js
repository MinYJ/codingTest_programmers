
/*
* 신기한 버그 undefined + 숫자 => NaN
* NaN + 1 => 1
* NaN + 2 => 2
*/
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(info=>{return info.split(' ')});
  console.log(`reports:`);
  console.log(reports);
  let counts = new Map();
  let test;
  for (const bad of reports) {
    let count = counts.get(bad[1]);
    if (count == undefined) count = 1;
    else  
    counts.set(bad[1],counts.get(bad[1])+1||1)
    console.log(counts);
  }
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
//let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 2;
// solution(id_list, report, k);

let test = new Map();
test.set('frodo', 1);
test.set('frodo', test.get('frodo')+1||1);

console.log(2||2);