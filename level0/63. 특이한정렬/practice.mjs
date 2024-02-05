var student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

/* 이름순으로 정렬 */
student.sort(function(a, b) { // 오름차순
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    // 광희, 명수, 재석, 형돈
});

// student.sort(function(a, b) { // 내림차순
//     return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
//     // 형돈, 재석, 명수, 광희
// });

console.log(student);