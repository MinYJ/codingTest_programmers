let str = "start hello java, hello spring, hello jap";
const key = "hello";
/*
       let number = 0;
       let count = 0;
       while(true) {
           if(str.indexOf(key) < 0) break;
           count += 1;
           str = str.substring(str.indexOf(key)+key.length+1);
       }
       console.log(count);


let count = 0;
let index = str.indexOf(key);
while (index >= 0) {
    index = str.indexOf(key, index + 1);
    count++;
}
console.log(count);
*/

let fruits = "apple,banana,mango";
console.log(fruits.split(""));
console.log(fruits.split("").join(""));