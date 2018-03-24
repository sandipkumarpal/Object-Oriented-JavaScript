const CreatePerson = function(firstName, lastName) {
    const person = {};

    Object.defineProperty(person, "firstName", {
        value: firstName,
        writable: false,
    });
    Object.defineProperty(person, "lastName", {
        value: lastName,
        writable: false,
    });

    return person;
}


const person = CreatePerson("Sandip", "pal");
console.log(person);
console.log(person.firstName);
console.log(person.lastName);