//방법1
const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']

//방법2
const list = myStr.split(/[a|b|c]/).filter(str => str);

//방법3
const arr = myStr.split(/[abc]/)

//방법4
/*
const tmp1 = myStr.split("a").join("b")
const tmp2 = tmp1.split("b").join("c")
const tmp3 = tmp2.split("c").filter(x => x)
*/