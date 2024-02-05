function solution(s, n) {
  let word = '';
  for(let i=0; i<s.length; i++) {
      let code = s[i].codePointAt(0);
      if(code !== 32) {
          if(code >= 65 && code <= 90) {
              code += n
              if(code > 90) {
                  code -= 26                            
              }
          } else {
              if(code >= 97 && code <= 122){
                  code += n
                  if(code > 122) {
                      code -= 26;                              
                  }
              }
          }
      } 
      word += String.fromCodePoint(code); 
  }
  return word;
}
// console.log('zzz', String.fromCodePoint('z'.codePointAt(0)))