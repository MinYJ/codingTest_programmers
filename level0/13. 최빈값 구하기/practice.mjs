console.log(0 || false);

[1,2].reduce((acc,cur,idx)=>{
    console.log(idx);
    return cur;
},[])