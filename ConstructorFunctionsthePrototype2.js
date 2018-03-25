const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    // this.sayHello = function() {
    //     return "Hi, There ";
    // }

    // Object.defineProperty(this, "fullName", {
    //     get: function() {
    //         return this.firstName + " " + this.lastName;
    //     }
    // });

    Object.defineProperties(Person.prototype, {
        sayHi : {
            value: function() {
                return "Hi There ";
            }
        },
        fullName : {
            get: function() {
                return this.firstName + " " + this.lastName;
            }
        }
    });
}

// Person.prototype.sayHello = function() {
//     return "Hi, There ";
// }

const sandipPal = new Person("Sandip", "pal");
console.log(sandipPal.fullName);
console.log(sandipPal.sayHi());