/*
** 1. score의 평균값 만들기
** 2. map으로 최빈값 만들기
** 3. score와 map을 이용해서 map에 등수추가하기
** 4. score에 map에 따른 등수 넣어주기
*/
function solution(score) {
    //1
    score = score.map(v=>(Number(v[0])+Number(v[1]))/2);
    let array = [...score].sort((a,b)=>b-a);
    
    //2
    let map = new Map();
    for(const ele of array) {
        map.set(ele, (map.get(ele) || 0) + 1);
    }
    
    //3
    let number = 1;
    for(const ele of array) {
        map.set(ele, `${map.get(ele)}_${number}`);
        number = number + 1;
    }

    //4
    score.forEach((v,i)=>{
        console.log(Number(map.get(v).split("_")[1]));
        score[i] = Number(map.get(v).split("_")[1]);
    })
    
    return score;
}