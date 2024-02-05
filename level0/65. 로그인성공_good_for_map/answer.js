const id_pw = ["meosseugi", "1234"];
const db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]];

function solution(id_pw, db) {
    const [userId, userPw] = id_pw;
    for(const [dbId, dbPw] of db) {
        if(userId === dbId && userPw === dbPw) return "login";
        else if(userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}

console.log(solution(id_pw, db));