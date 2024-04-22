function solution(arr1, arr2) {
    const Findbigger = (array1, array2) => {
        const sumArr1 = array1.reduce((sum, cur)=>{return sum+cur},0)
        const sumArr2 = array2.reduce((sum, cur)=>{return sum+cur},0)
        return (sumArr1 > sumArr2) ? 1 : (sumArr1 < sumArr2) ? -1 : 0
    }
    return (arr1.length > arr2.length) ? 1 : (arr1.length < arr2.length) ? -1 : Findbigger(arr1,arr2)
}