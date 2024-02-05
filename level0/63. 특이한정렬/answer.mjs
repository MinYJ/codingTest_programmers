// const array = [1,7,5,4];
// const array = [5,8,6,3];
const array = [1,1,4,5]

/**/
array.sort((a,b)=> {
    // console.log(Math.abs(a - n));
    // console.log(Math.abs(b - n));
    // console.log(Math.abs(a - n) - Math.abs(b - n) || b - a);
    console.log(`a: ${a}//b: ${b}//b-a:${b-a}`);
    return b-a;
})
console.log(array);

/*
** after-before는 오름차순이다  
** before-after는 내림차순이다
** 음수일경우 두 개의 위치를 바꾼다
** 양수일경우 움직이지 않는다
*/