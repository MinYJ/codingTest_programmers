const array = Array(6).fill(5).map((v, idx)=> {
    console.log("v", v);
    console.log("idx", idx);
});
console.log(array);