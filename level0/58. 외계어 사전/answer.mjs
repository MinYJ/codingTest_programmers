function solution(spell, dic) {
    const result = dic.filter(dicV=>{
        let flag = true;
        spell.forEach(spellV=>{
            if(!dicV.includes(spellV)) flag = false;
        })
        return flag === true;
    });
    const answer = (result.length > 0) ? 1 : 2;
    return answer;
}

console.log(["가나다", "가나가"].sort());