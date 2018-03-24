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
            set: function(value) {
                this.firstName = value;
                this.lastName = value;
            }
        }
    });

    // person.fullName = person.firstName + " " + person.lastName;

    return person;
}


const person = CreatePerson("Sandip", "pal");
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);