const createPerson = function(firstName, lastName) {
    const person = {
        firstName,
        lastName,
    };

    Object.defineProperty(person, "fullName", {
        get: function() {
            return this.firstName + " " + this.lastName;
        },
        configurable: true
    });

    return person;
};

const createEmplyee = function(firstName, lastName, position) {
    const person = createPerson(firstName, lastName);

    person.position = position;
    
    const fullName = Object.getOwnPropertyDescriptor(person, "fullName");
    const fullNameFunc = fullName.get.bind(person);


    Object.defineProperty(person, "fullName", {
        get: function() {
            return fullNameFunc() + ", " + this.position;
        },
        enumerable: true,
    })



    return person;
}

const sandipPal = createEmplyee("Sandip", "pal", "UI developer");
console.log(sandipPal.fullName);