// This is a single-line comment
/**
 * This is a multiline comment
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @returns {number} The sum of the two numbers
 */
function add(a, b) {
  return a + b;
}

// Variable declarations
const message = 'Hello, World!';
let count = 10;

console.log(count)
// Arrow Function
const multiply = (x, y) => x * y;

// Promise Example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 2000);
  });
};

// Async/Await Example
async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data);
}

// Class Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name} says Hello!`);
  }
}

// Creating an object and calling a method
const person = new Person('Alice', 30);
person.greet();

// Template Strings
const greeting = `My name is ${person.name} and I am ${person.age} years old.`;
console.log(greeting);
