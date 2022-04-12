let a = ["1", "2", "c", "c", "2"];

let b = new Set(a);
console.log(b);
console.log(typeof b);
a = Array.from(b);
console.log(a);
console.log([...a]);
