function gcdlcm(a, b) {
  var r;
  for(let ab= a*b;r = a % b;a = b, b = r){}
  console.log(`a: `, a);
  console.log(`b: `, b);
  console.log(`r: `, r);
  console.log(`ab: `, ab);
  return [b, ab/b];
}

gcdlcm(2,4);