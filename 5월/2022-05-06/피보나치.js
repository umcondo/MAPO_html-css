function fib(n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

// console.time();
// console.log(fib(77));
// console.timeEnd();

function fib(n) {
  a = 1;
  b = 1;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.time();
console.log(fib(77));
console.timeEnd();
