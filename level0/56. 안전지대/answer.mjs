const array = [['0','0'], ['0','0']];
let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];

array.forEach((row,y,self)=>row.forEach((it, x)=>{
    if(it === 1) return false;
    outside.some(([oy,ox])=>console.log(`${!!self[oy + y]?.[ox + x]}_${!self[oy + y]?.[ox + x]}_${self[oy + y]?.[ox + x]}`)); 
}))