function solution(numbers, k) {
    const [idx, len] = [k * 2 - 1, numbers.length];
    const findIdx = idx >= len ? idx % len : idx;
    return findIdx;
}