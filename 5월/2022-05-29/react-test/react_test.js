import { Plus, pi } from "./test_module.js";
// import { sayHi } from "./sayHi.js";

console.log(Plus(1, 2));

console.log(pi);

export const A = Plus(1, 4) + 1;
// console.log(sayHi("John"));

const name = "강대국";

export default name;
