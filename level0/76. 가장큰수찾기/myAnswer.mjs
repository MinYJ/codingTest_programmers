function solution(array) {
    const answer = array.reduce((max, cur)=>{
        const maxArray = [Math.max(max[0],cur), array.indexOf(Math.max(max[0],cur))];
        
        return maxArray;
    }, [array[0], 0])
    return answer
}