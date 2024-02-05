function solution(spell, dic) {
    spell = alphetSort(spell);
    const result = dic.filter(v=>{
        const alienWord = alphetSort([...v]);
        return alienWord.includes(spell) === true;
    })
    const answer = (result.length > 0) ? 1 : 2;
    return answer;
}

function alphetSort(word){
    word = word.map(v=>v.charCodeAt())
                 .sort((a,b)=>a-b)
                 .map(v=>String.fromCharCode(v))
    return word.join("")
}

console.log(["b","c","a"].sort((a,b)=> a-b));