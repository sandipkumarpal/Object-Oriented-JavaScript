const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Object.defineProperties(Person.prototype, {
    sayHi: {
        value: function() {
            return "Say Hi ";
        }
    },
    fullName: {
        get: function() {
            return this.firstName + " " + this.lastName;
        }
    }
});

const Employee = function(firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype, {
    sayHi: {
        value: function() {
            return Person.prototype.sayHi.call(this) + "My Name is " + this.fullName;
        }
    },
    fullName: {
        get: function() {
            const Desc = Object.getOwnPropertyDescriptor(Person.prototype, "fullName");
            return Desc.get.call(this) + ", " + this.position;
        }
    }
});

const sandipPal = new Employee("Sandip", "pal", "Ui Developer");
console.log(sandipPal);
console.log(sandipPal.fullName);
console.log(sandipPal.sayHi());

