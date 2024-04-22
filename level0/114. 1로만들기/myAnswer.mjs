function solution(num_list) {
    const operator = {
        even: (num)=>num/2, 
        odd: (num)=>(num-1)/2
    }
    
    const result = num_list.reduce((count, cur)=>{
        while(cur !== 1) {
            const key = (cur%2===0)? 'even' : 'odd';
            cur = operator[key](cur);
            count += 1;
        }
        return count
    }, 0);
    
    return result;
    
}