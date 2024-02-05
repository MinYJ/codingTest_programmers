const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let star = "";

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const length = Number(input[0]);
    for(let height=0; height<length; height++){
        for(let width=0; width<length; width++){
            if(height >= width) {
                star += '*';
            } else {
                star +=' ';
            }
        }
        star += '\n';
    }
    console.log(star);
});