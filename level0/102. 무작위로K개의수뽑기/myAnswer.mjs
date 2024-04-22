function solution(arr, k) {
    arr = arr.reduce((acc,cur)=>{
       if(acc.length === k) return acc
       if(!acc.includes(cur)) acc.push(cur)
       return acc
   },[]);
   
   while(true) {
       if(arr.length >= k) break; 
       arr.push(-1)
   }
   return arr
}