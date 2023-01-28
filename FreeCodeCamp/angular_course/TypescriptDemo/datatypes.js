"use strict";
// STRING
let lname;
lname = "satoshi";
let newName = lname.toUpperCase();
console.log("string:", newName);
// NUMBER
let age;
age = 25;
age = 25.6;
// age = "";
console.log("number:", age);
let dob = "25";
let result = parseInt(dob);
// BOOLEAN
let isValid = false;
console.log("boolean:", isValid);
// ARRAY
let empList;
empList = ["caro", "caro1", "caro3"];
// let depList: Array<string>;
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[5];
let resultArr = numList.filter((num) => num > 2);
let empArr = empList.find((emp) => emp === "caro");
let sumArr = numList.reduce((acc, num) => acc + num);
console.log("array:", resultArr);
console.log("array:", empArr);
console.log("array:", sumArr);
let c = 2 /* Color.Blue */;
console.log("enum:", c);
// TUPLES
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log("tuples:", swapNumbs[0], swapNumbs[1]);
// ANY
let department;
department = "IT";
department = 10;
console.log("any:", department);
// VOID
// NEVER
