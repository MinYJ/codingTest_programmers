function getDayName(year,month,day) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`${year}-${month}-${day}`);
  console.log(date.toString());
  const index = date.getDay();
  const month_index = date.getMonth();
  console.log(arr[index]);
  console.log(month_index);
}

getDayName(2023,7,8);