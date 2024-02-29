function solution(before, after) {
    before = [...before];
    after = [...after];

    for(let i=0; i<before.length; i++){
        for(let j=0; j<after.length; j++){
            if(before[i] == after[j]) {
                before.splice(i,1);
                after.splice(j,1);
                j = -1;
                i = 0;
            }
        }
    }

    if(before.length == 0 && after.length == 0) return 1;
    else return 0;
}