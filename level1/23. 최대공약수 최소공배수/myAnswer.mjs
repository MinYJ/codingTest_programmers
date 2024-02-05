function solution(num1, num2){
  const gcd = (a, b) => (a % b === 0) ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b /gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

// function GCD(number1, number2){
//   if(number1 % number2 == 0) {
//     return number2;
//   }
//   GCD(number2, number1 % number2);
// }

// console.log(GCD(4,8));
// 유클리드 호제법
// GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
console.log(0 % 1);