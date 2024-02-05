function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}

let line = new Array(10).fill(0);
const lines = [[0, 2], [-3, -1], [-2, 1]];
lines.forEach(([a, b]) => {
    for(; a < b; a++) line[a+5]++;
});
console.log(line)