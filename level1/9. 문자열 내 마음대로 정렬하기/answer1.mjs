function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        console.log(`chu`,chu);
        strings[i] = chu + strings[i];
        console.log(`strings[i]`,strings[i]);
    }
    strings.sort();
    console.log(`strings`, strings)
    // for (var j = 0; j < strings.length; j++) {
    //     strings[j] = strings[j].replace(strings[j][0],"");
    //     answer.push(strings[j])
    // }

    return answer;
}
const strings = ["abce", "abcd", "cdx"];
console.log(true + true);