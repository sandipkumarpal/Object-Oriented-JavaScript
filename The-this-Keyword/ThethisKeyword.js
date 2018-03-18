const joneDoe = {
    name: "Jone",
    greet: function() {
        return "My name is " + this.name;
    } 
}

// BIND FUNCTIONS

const name = "Gopal Pal";
const globalGreet = function() {
    return "My name is " + this.name;
}

joneDoe.otherName = "Sarasawti pal";
const otherNameFun = function() {
    return "My name is " + this.otherName;
}

const sandipPal = {
    name: 'Sandip Pal',
    otherName: 'sa',
    greet: globalGreet,
    globalGreetFun: otherNameFun.bind(joneDoe)
}

console.log(sandipPal.greet());
console.log(sandipPal.globalGreetFun());