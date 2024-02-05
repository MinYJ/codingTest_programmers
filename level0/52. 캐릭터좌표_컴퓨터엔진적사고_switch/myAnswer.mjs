function solution(keyinput, board) {
    let location = [0,0];
    const xLimit = Math.floor(board[0]/2);
    const yLimit = Math.floor(board[1]/2);
    const direction = {"left": [-1,0,-xLimit], "down":[0,-1,-yLimit],
                       "right":[1,0,xLimit], "up":[0,1,yLimit]};

    for(const ele of keyinput){
        location[0] = location[0] + direction[ele][0];
        location[1] = location[1] + direction[ele][1];
        
        switch(ele) {
            case "left":
                location[0] = Math.max(direction[ele][2],location[0]);
                break;
            case "down":
                location[1] = Math.max(direction[ele][2],location[1]);
                break;
            case "right":
                location[0] = Math.min(direction[ele][2],location[0]);
                break;
            case "up":
                location[1] = Math.min(direction[ele][2],location[1]);
                break;
            default:
        }
    }
    return location;
}