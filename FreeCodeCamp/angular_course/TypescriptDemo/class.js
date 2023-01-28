"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
// creating classes
class Employee {
    // class properties and constructor
    constructor(id, name, address) {
        // member visibility
        _Employee_id.set(this, void 0); // private
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // class methods
    getNameWithAddress() {
        return `${this.name} - ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// create instance of class
let carolina = new Employee(1, "carolina", "casa linda");
let address = carolina.getNameWithAddress();
// carolina.id = 1;
// carolina.name = "carolina";
// carolina.address = "casa linda";
console.log(carolina);
console.log(address);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is manager at ${this.address}`;
    }
}
let alan = new Manager(2, "alan", "costa del sol");
console.log(alan.getNameWithAddress());
