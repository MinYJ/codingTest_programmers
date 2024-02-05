const arr = [1, 2, 3, 2, 2, 5, 5, 6];

const getMode = (arr) => {
    const newObject = {};
    arr.forEach((item)=>{
        if(newObject[item]) {
            newObject[item] += 1;
        } else {
            newObject[item] = 1;
        }
    })

    let modeValue = newObject[Object.keys(newObject)[0]];
    let modeKey = Object.keys(newObject)[0];

    for(const item in newObject) {
        if(newObject[item] > modeValue) {
            modeValue = newObject[item];
            modeKey = item;
        }
    }

    for(const item in newObject) {
        if(newObject[item] == modeValue && item != modeKey) {
            return -1;
        }
    }
    return parseInt(modeKey);
}