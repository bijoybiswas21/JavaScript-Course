// Basic JavaScript example

// Variables declaration
let greeting = "Hello World";
const pi = 3.14159;
var legacy = "old style"; // older way to declare variables

// Function declaration
function calculateArea(radius) {
    return pi * radius * radius;
}

// Arrow function example
const multiply = (a, b) => a * b;


// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Object example
const person = {
    name: "Bijoy Biswas",
    age: 20,
    sayHello() {
        console.log(`${this.name} says hello!`);
    }
};

// Basic error handling
try {
    console.log(greeting);
    person.sayHello();
    console.log(`Circle area: ${calculateArea(5)}`);
    console.log(`5 x 3 = ${multiply(5, 3)}`);
    console.log(`Doubled numbers: ${doubled}`);
} catch (error) {
    console.error("An error occurred:", error.message);
}