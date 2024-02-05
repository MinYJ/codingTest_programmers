function solution(a, b) {
  const months_to_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let sum = 0;
  for(let i=0; i<months_to_days.length; i++) {
    if(a > i+1) sum = sum + months_to_days[i];
    else break;
  }
  sum = sum + b;
  let days_index = sum % 7;
  return days[days_index];
}

console.log(solution(1, 1));





/*
  if(a === days_29) {
      // 2월
      a = 29;
  } else {
      // for문_4월, 6월, 9월 
      // for(let i=0; i<array_days_30.length; i++) {
      //   if(array_days_30[i] === a) {
      //     a = 30;
      //     break;
      //   }
      // }
      // 나머지
      // a = 31;

      // for문_filter
      const test = array_days_30.filter(value => value === a);
      if(test.length > 0) a = 30;
      else a = 31;
  }
*/