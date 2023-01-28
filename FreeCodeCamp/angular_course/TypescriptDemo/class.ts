// creating classes
class Employee {
  // member visibility
  #id: number; // private
  protected name: string;
  address: string;

  // class properties and constructor
  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  // class methods
  getNameWithAddress(): string {
    return `${this.name} - ${this.address}`;
  }
}

// create instance of class
let carolina = new Employee(1, "carolina", "casa linda");
let address = carolina.getNameWithAddress();

// carolina.id = 1;
// carolina.name = "carolina";
// carolina.address = "casa linda";

console.log(carolina);
console.log(address);

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is manager at ${this.address}`;
  }
}

let alan = new Manager(2, "alan", "costa del sol");
console.log(alan.getNameWithAddress());
