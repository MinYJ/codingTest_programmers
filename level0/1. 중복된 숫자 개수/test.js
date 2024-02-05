// for문을 이용한 중복 요소 제거

const array = [1, 2, 3, 3, 4, 4, 5, 5];
let result = [];

for(let i=0; i<array.length; i++) {
  if(i == 0) {
    result.push(array[i]);
    continue;
  }
  for(let j=0; j<result.length; j++) {
    let onDuplicate = false;
    if(result[j] == array[i]) {
      onDuplicate = true;
    }
    if(j == result.length - 1 && onDuplicate == false) {
      result.push(array[i]);
    }
  }
}
console.log(result); // [ 1, 2, 3, 4, 5]