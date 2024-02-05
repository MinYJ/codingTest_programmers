let map = new Map();
const array = [1,1,1,1,2,2,2,2,2,3,3,3]

for(let n of array) {
    map.set(n, (map.get(n) || 0)+1);
}
console.log('before', map);
map = [...map].sort((a,b)=>{
    return a[1]-b[1];
})
map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
console.log('after', map);