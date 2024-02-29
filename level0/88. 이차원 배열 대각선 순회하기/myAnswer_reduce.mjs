function solution(board, k) {
    const answer = board.reduce((heightAcc, cur, height)=>{
        const sum = cur.reduce((widthAcc, cur, width)=>{
            if(height+width<=k) return widthAcc + board[height][width]
            return widthAcc
        }, 0)
        return heightAcc + sum
    }, 0);
    return answer
}