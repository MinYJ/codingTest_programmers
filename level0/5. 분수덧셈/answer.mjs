// 버전2
function gcd(a, b) {
  if (a % b == 0) return b;
  return gcd(b, a%b);
}
function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let bunmo = denom1 * denom2;
  let bunja = (numer1 * denom2) + (numer2 * denom1);
  
  gcd_value = gcd(bunmo, bunja);
  answer.push(bunja / gcd_value);
  answer.push(bunmo / gcd_value);

  return answer;
}

// 버전1
// function solution(numer1, denom1, numer2, denom2) {
//   let answer = [];
//   let bunmo = denom1 * denom2;
//   let bunja = (numer1 * denom2) + (numer2 * denom1);
//   let count = (bunmo - bunja) > 0 ? bunmo : bunja;

//   for (let i = count; i > 0; i--) {
//     if(bunja % i == 0 && bunmo % i == 0) {
//       answer.push(bunja / i);
//       answer.push(bunmo / i);
//       break;
//     }

//     if(i == 1) {
//       answer.push(bunja / i);
//       answer.push(bunmo / i);
//     }
//   }

//   return answer;
// }