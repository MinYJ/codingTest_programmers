function solution(picture, k) {
    const width = picture[0].length*k;
    const height = picture.length*k;
    const newPicture = Array.from(new Array(height), ()=>Array(width).fill(0))
   
    const pictureArr = picture.map(v=>[...v]);
    
    pictureArr.forEach((row, height)=>{
        row.forEach((ele, width)=>{
            const value = picture[height][width];
            const heightLimit = height*k+k;
            const widthLimit = width*k+k;
            let newHeight = height*k;
            let newWidth = width*k;
            while(newHeight < heightLimit) {
                newPicture[newHeight][newWidth] = value;
                newWidth += 1;
                if(newWidth >= widthLimit) {
                    newWidth -= k;
                    newHeight += 1;
                }                
            }
        })
    })
    return newPicture.map(v=>v.join(""))
}