function solution(order) {
    const object = {'americano': 4500, 'cafelatt':5000, 'anything': 4500}
    const price = order.reduce((sum, cur)=>{
        for(const key in object) {
            sum = (cur.includes(key)) ? (sum + object[key]) : sum
        }
        return sum
    }, 0);
    
    return price
}