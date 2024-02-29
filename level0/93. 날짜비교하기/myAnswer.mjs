function solution(date1, date2) {
    date1 = Number(date1.join(''));
    date2 = Number(date2.join(''));
    
    return (date1 < date2) ? 1 : 0
}