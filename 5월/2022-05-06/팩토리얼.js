function factorial(n) {
  if (n === 1) return 1;
  return factorial(n - 1) * n;
}
console.log(factorial(4));

function factorial2(n) {
  return n ? factorial(n - 1) * n : 1;
}

console.log(factorial2(5));
