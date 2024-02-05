let strings = 'abcd';
strings = [...strings];
strings.sort((a,b) => {
    return a > b ? -1 : 1
});

let answer = '';
strings.forEach((item)=>{
  answer = answer + item;
})

console.log(answer);