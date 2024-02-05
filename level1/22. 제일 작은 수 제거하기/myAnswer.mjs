function solution(arr) {
  if(arr.length == 1) return [-1];
  let arr2 = [];
  arr.forEach((value)=>{
      arr2.push(value)
  });
  
  arr2.sort((a, b) => {
      return a - b;
  });
  
  let lowest_number = arr2[0];
  arr2 = [];
  arr.forEach((value)=>{
      if(value != lowest_number) arr2.push(value) 
  })
  
  return arr2
}