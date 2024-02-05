function solution(num1, num2) {
  var answer = 0;

  function add(a,b) {
    if (b==0) return a

    let sum = a^b;
    let carry = (a&b) << 1;

    return add(sum, carry);
  }

  return add(num1, num2);
}