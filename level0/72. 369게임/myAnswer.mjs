function solution(order) {
    order = [...order.toString()];
    const checkSpecificNumbers = ['3','6','9'];
    
    let sum = 0;
    checkSpecificNumbers.map((number)=>{
        const count = order.reduce((acc,cur)=>{
            return (cur == number) ? acc+1 : acc;
        }, 0)
        sum = sum + count;
    })
    return sum
}