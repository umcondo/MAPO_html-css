const a = {};
const b = {};
const c = b;
const e = {};
const f = { a: 1 };
Object.assign(e, f);

console.log(e === a);
console.log(e);

const a2 = {};
const b2 = { a: { a: 1 } };
Object.assign(a2, b2);
console.log(a2);
console.log(a2.a === b2.a);
