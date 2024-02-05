let a = {'사과': 1};
let b = {'사과': 100};

console.log('a', a);
swap(a, b);
console.log('a', a);
console.log('b', b);


function swap(a, b) {
  a = b;
  console.log(`a`, a);
  a['사과'] = 50;
}