var a = 10;
function foo(b) {
    if (b === void 0) { b = 10; }
    return b;
}
console.log(foo(20));
