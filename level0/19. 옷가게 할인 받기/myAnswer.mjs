const table = {'500000': 0.2, '300000': 0.05, '100000': 0.1};
const price = 300000;
let cost;
for(const key in table) {
    if(price >= Number(key)) {
        cost = price - (price * table[key]) ;
        console.log("cost: ", cost);
        break; 
    }
}