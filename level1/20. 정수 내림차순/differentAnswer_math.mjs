let number = 2431;
let arr = [];
while(number > 0) {
  arr.push(number%10);
  number = Math.floor(number/10);
}

arr.sort((a,b)=> b-a).join('')*1;

const arr2 = ['3','4','1','2'];

//console.log(arr2.join('')*1);
const string = '2';
console.log(string*1);