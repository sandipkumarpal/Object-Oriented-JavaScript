// CREATE OBJECT
var joneDoe = {
    firstName: "Jone",
    lastName: "Doe",
    sayHi: function() {
        return "Hi There!!";
    }
}

// FACTORY FUNCTION

const createPerson = function(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        sayHi: function() {
            return "Hi There!!";
        },
    };
};
