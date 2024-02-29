my_string = [...my_string];
const test = my_string.reduce((acc,cur)=>{
    return acc.includes(cur) ? acc : [...acc, cur]
},[])