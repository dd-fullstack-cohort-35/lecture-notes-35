class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Carlos");
console.log(greeter.greet());


function makeAdder(var1: number) {
    return function(var2: number): number {
        return var1 + var2
    }
}

const add10 = makeAdder(10)

console.log(add10(5))