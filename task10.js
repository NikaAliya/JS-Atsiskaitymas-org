import { composition } from "./composition.js";
import { division } from "./division.js";
import { multiplication } from "./multiplication.js";
import { substraction } from "./subtraction.js";
import { one, two, three, four, five } from "./numbers.js";

const a = composition(one, four);
const b = division(four, two);
const c = substraction(three, two);
const d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
