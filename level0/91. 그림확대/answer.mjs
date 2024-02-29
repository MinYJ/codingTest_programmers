function solution(picture, k) {
    var answer = [];

    picture.forEach((line) => {
        const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

        for(let i=0; i<k; i++) answer.push(expanded);
    });

    return answer;
}

const array = [['.*', '@#']];

array.forEach(v=>{
    console.log([...v]);
    [...v].reduce((acc,cur)=>{
        console.log(cur.repeat(2))
    }, '')
})
