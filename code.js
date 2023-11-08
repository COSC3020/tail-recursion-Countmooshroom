function fibTail(n) {
    if (n <= 2) { return 1; }
    return fibLoop(1, 1, 3, n);

    function fibLoop(prev1, prev2, cur, end) {
        if (cur == end) { return prev1 + prev2; }
        return fibLoop(prev2, prev1 + prev2, cur + 1, end)
    }
}
