function solution(my_str, n) {
    let start = 0;
    let end = n;
    let array = [];
    while(true) {
        if(end > my_str.length) {
            array.push(my_str.slice(start, my_str.length))
        } else {
            array.push(my_str.slice(start, end))
        }
        
        if(end >= my_str.length) break;
        start += n;
        end += n;
    }
    return array
}