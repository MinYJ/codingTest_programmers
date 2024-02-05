const test1 = [[80, 70], [90, 50], [40, 70], [50, 80]];
const test2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];

function solution(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
    console.log(avg.slice())
    console.log(avg.sort((a,b)=>b-a));
    console.log(avg.slice().sort((a,b)=>b-a));
}
solution(test1);