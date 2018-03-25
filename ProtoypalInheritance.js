const person = {
    firstName : "Sandip",
    lastName: "Pal"
}

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + ", " + this.lastName;
    }
});

person.sayHi = function() {
    return "Say, Hi";
}

console.log(person);
console.log(person.fullName);
console.log(person.hasOwnProperty("fullName"));

const employee = Object.create(person);

console.log(employee);
console.log(employee.fullName);
console.log(employee.hasOwnProperty("fullName"));
console.log(employee.sayHi());

employee.sayHi = function() {
    return "Hi there, My Name is " + this.fullName;
}
console.log(employee.sayHi());