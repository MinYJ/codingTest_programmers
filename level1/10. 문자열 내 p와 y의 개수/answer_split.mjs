function solution(s) {
  const p_number = s.toUpperCase().split('P');
  const y_number = s.toUpperCase().split('Y');
  const number = s.toUpperCase().split(' ');
  console.log(p_number);
  console.log(y_number);
  console.log(number);
}

//const s = 'papayay';
const s = 'p p y y';
solution(s);