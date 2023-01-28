"use strict";
// diferent ways to write functions
// name function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 5));
// arrow function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(7, 10));
// function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 4));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [5, 6, 7];
console.log(add2(2, 3, ...numbers));
// generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c"]);
