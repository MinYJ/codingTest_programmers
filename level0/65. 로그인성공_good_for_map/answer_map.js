const id_pw = ["meosseugi", "1234"];
const db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]];

function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    console.log(map.get('0'))
    return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : 'fail';
}

console.log(solution(id_pw, db));