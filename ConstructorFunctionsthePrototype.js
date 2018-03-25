const createPerson = function(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        sayHello: function() {
            return "Hi there, ";
        }
    };
    Object.defineProperty(person, "fullName", {
        get : function() {
            return this.firstName + " " + this.lastName;
        },
        configurable: true,
        enumerable: true,
    });
    return person;
}

const createEmployee = function(firstName, lastName, position) {
    const person = createPerson(firstName, lastName);

    person.position = position;

    const fullName = Object.getOwnPropertyDescriptor(person, "fullName");
    const fullNameFunc = fullName.get.bind(person);

    Object.defineProperty(person, "fullName", {
        get : function() {
            return fullNameFunc() + ", " + this.position;
        },
        configurable: true,
        enumerable: true,
    });

    const sayHelloFunc = person.sayHello.bind(person);

    person.sayHello = function() {
        return sayHelloFunc() + "My name is " + this.fullName;
    }

    return person;
}

const sandipPal = createEmployee("Sandip", "Pal", "UI Developer");

console.log(sandipPal);
console.log(sandipPal.fullName);
console.log(sandipPal.sayHello());