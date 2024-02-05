const gcd = (a,b)=>(a%b==0)?b:gcd(b, a%b);
const lcm = (a,b)=>a*b/gcd(a,b);

console.log(lcm(17,6)/6);