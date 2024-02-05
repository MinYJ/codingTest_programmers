const alphet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
let age = '51';
age = [...age];
console.log(age);
let result = "";
alphet.map((vAlphet, iAlphet)=>{
    age.map((vAge, iAge)=>{
        console.log(`${iAlphet}-${vAge}`);
        if(iAlphet == Number(vAge)) {
            result = result + vAlphet;
        }
    })
})

console.log(result);