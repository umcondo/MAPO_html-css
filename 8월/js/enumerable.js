const a = ["a", "b", "c"];

a.foo = "hello";

for (let i in a) {
  console.log(i);
}

console.log("==============");

for (let i of a) {
  console.log(i);
}

const newArray = [];
const newArray2 = [];
for (let i in a) {
  if (Object.getOwnPropertyDescriptor(a, i).enumerable) newArray.push(i);
}
for (let i in a) {
  newArray2.push(i);
  console.log(i, a.propertyIsEnumerable(i));
}

console.log({ newArray, newArray2 });
