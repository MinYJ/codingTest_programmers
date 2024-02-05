function solution(hp) {
    const power = [5,3,1];
    let howManyAnts = 0;
    for(let i=0; i<power.length; i++) {
        if(hp%power[i] == 0) {
            howManyAnts += (hp/power[i]); 
            return howManyAnts;
        } 
        howManyAnts += Math.floor(hp/power[i]);
        hp = hp%power[i];
    }
    return howManyAnts;
}