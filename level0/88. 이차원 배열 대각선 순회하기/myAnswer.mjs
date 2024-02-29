function solution(board, k) {
    let sum = 0;
    board.forEach((heightValue,height)=>{
        heightValue.forEach((widhtValue, width)=>{
            const number = board[height][width];
            if(height + width <= k) sum += number; 
        })
    })
    return sum
}