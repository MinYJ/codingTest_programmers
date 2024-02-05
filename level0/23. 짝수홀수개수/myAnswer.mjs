function solution(num_list) {
    const result = num_list.reduce((acc, cur)=>{
        if(cur % 2 == 0) acc[0] = acc[0] + 1;
        else acc[1] = acc[1] + 1;
        return acc;
    }, [0,0]);
    
    return result;
}