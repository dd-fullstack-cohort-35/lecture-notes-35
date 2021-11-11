// console.log(Infinity / -0);
//
// console.log([0, -1, -2].sort());
//
// const array = [{
//     "id": 1,
//     "name": "Leanne Graham",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }, {
//     "id": 2,
//     "name": "Ervin Howell",
//     "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//     }
// }, {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// }]
//
// const doh = array.map(index => {
//     index.company = undefined;
//     return index;
// });
//
// console.log(doh)
//
// console.log(typeof 42);
// console.log(typeof "42");
//
// const num1 = 42;
// const num2 = "42";
//
// console.log(typeof num1)
// console.log(typeof num2)
// const sum = num1 + num2
//
// console.log(typeof sum)

//this
// const testThis = {
//     prop: 42,
//     func: function() {
//         return this.prop;
//     }
// };
//
// console.log(testThis.func());
//
// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }
//
// let add10 = makeAdder(10);
//
// console.log(add10(7));
// console.log(add10);

const Greeter = (function() {

    function Greeter(greeting) {
        this.greeting = greeting;
    }

    Greeter.prototype.getGreeting = function () {
        return (this.greeting);
    }

    Greeter.prototype.setGreeting = function (newGreeting) {
        this.greeting = newGreeting
    }

    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    }

    return Greeter;
})

const greeter1 = Greeter.greet("Mariah");

console.log(greeter1);
