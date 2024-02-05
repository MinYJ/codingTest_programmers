const test1 = [[80, 70], [90, 50], [40, 70], [50, 80]];
const test2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];

function solution(score) {
    score.map(el=>{
        // score.filter(v=>console.log(`el: ${el[0]}_${el[1]} score: ${v[0]}_${v[1]}`));
        console.log(score.filter(v=>(v[0] + v[1]) / 2 > (el[0] + el[1]) / 2));
    })
}

//test1.map(v=> {return ((Number(v[0])+Number(v[1]))/2)});
solution(test2);