const array = [1,2,3];

const result = array.reduce((acc, cur) => {
    return acc + cur;
});

console.log(result);