/*
** 1. 현재 수와 다음 수가 같으면 count
** 2. 이미 카운트된 수가 다음 수에 나오면 패스 
*/

// const arr = [1, 2, 3, 2, 2, 5, 5, 6];
const arr = [1,1,2];
const obj = {};


for(let i=0; i<arr.length; i++){
    if(Object.keys(obj).length == 0) obj[arr[i]] = 1;
    for(let j=0; j<Object.keys(obj).length; j++){
        if(arr[i] == Object.keys(obj)[j]) {
            continue;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for(let k=i+1; k<arr.length; k++){
        const index = arr[i] + ''; 
        console.log(`index: ${obj[index]}`);
        if(arr[i] == arr[k]){
            obj[index] = obj[index] + 1;
        }
    }
}

console.log(obj);