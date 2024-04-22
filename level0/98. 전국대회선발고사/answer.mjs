function solution(rank, attendance) {
    const [a, b, c] = rank
      .map((r, i) => [r, i])
      .filter(([_, i]) => attendance[i])
      .sort(([a], [b]) => a - b);
    return 10000 * a[1] + 100 * b[1] + c[1];
  }

const test = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];
console.log(test.map((r,i)=>[r,i]).filter(([_,i])=>attendance[i]));
console.log(test.map((r,i)=>[r,i]).filter(([_,i])=>attendance[i]).sort(([a],[b])=>a-b));