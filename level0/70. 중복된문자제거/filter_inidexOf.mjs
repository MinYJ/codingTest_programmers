my_string = [...my_string];
const test = my_string.filter((v,i)=>{
    return my_string.indexOf(v) === i
})
return test.join("");