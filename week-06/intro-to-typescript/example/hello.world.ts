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

class Pet {
    constructor(id: number, type: string, tail: boolean) {
    }
}