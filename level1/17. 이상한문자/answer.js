function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

const arr = ['a', 'b', 'c'];
arr.map((i, key) => {console.log(`i: ${i}, key: ${key}`)});