function lastKNumbersSeq(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        arr[i] = arr.slice(start, i).reduce((a, b) => a + b, 0);
    }
    return arr;
    
}
console.log(lastKNumbersSeq(6, 3));
