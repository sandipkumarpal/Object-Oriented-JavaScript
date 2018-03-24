const CreatePerson = function(firstName, lastName) {
    const person = {};

    Object.defineProperties(person, {
        firstName: {
            value: firstName
        },
        lastName: {
            value: lastName,
        },
        fullName : {
            get: function() {
                return this.firstName + " " + this.lastName;
            },
            configurable: true
        }
    });

    // person.fullName = person.firstName + " " + person.lastName;

    return person;
}
const person = CreatePerson("Sandip", "pal");
Object.defineProperty(person, "fullName" , {
    get: function() {
        return this.firstName + " " + this.lastName;
    }
})

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);