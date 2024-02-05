function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      .join("");
}

console.log("abcd"[1]);