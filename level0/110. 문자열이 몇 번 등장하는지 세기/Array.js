1
2
const solution=(s,p)=>Array(s.length-p.length+1).fill('').map((v,i)=>s.slice(i,i+p.length)).filter(v=>v==p).length;