// 반례 1999 기대값: 222
// 마지막에 9 + 9 + 9 + 1로 28마리가 된다
// 이때 2마리를 시키면 쿠폰이 2개가 발급되어 쿠폰이 10개가되어 다시 주문할 수 있다
function solution(chicken) {
    return getServiceChicken(chicken);
}
function getServiceChicken(n, totalChicken = 0, totalCoupon = 0){
    if(n < 10) {
        totalCoupon += n;
        let chickens = 0;
        while(totalCoupon >= 10) {
            chickens += Math.floor(totalCoupon/10);
            totalCoupon = (totalCoupon%10)+chickens; 
        }
         
        totalChicken += chickens;
        return totalChicken;
    }
    const chickens = Math.floor(n/10); 
    totalChicken += chickens;
    totalCoupon += n%10;
    return getServiceChicken(chickens, totalChicken, totalCoupon);
}