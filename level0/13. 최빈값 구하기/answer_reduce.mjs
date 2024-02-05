const array = [1,2,3,3,1,1];

const result = array.reduce((acc, cur) =>{
    acc.hasOwnProperty(cur) ? acc[cur] += 1 : acc[cur] = 1; 
    return acc;
}, {});

console.log(result);