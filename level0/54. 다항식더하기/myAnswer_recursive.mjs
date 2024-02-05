//const test = "3x + 7 + x";
const test = "3x + 7";

function parser(test, string="", array = []) {
    console.log(array);
    if(test.slice(1) == "") return string + test.slice(0,1);
    
    if(array.length === 3) {
    }
    string = string + test.slice(0,1);
    if(string.includes(" ")) {
        array.push(string);
        string = "";
    }
    return parser(test.slice(1), string, array);
}

console.log(2 || 1);