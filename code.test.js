const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fib(n) {
    if (n <= 2) { return 1; }
    else { return fib(n-1) + fib(n-2); }
}

const test =
    jsc.forall(jsc.nat(30), function(n) {
        return JSON.stringify(fibTail(n)) == JSON.stringify(fib(n));
    });
jsc.assert(test);