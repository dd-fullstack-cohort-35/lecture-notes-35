// variables
// data types
// variables must be declared

// declare variables with const, let or var

// constant name can't change
// 'Bob' is a string
const person = 'Bob'

// let can change the value
// age is a number
let age = 23
age = age + 1

// boolean is true or false
let adult = true

// don't use var if you can avoid it

// ARRAYS!!!!
let names = ['Bob', 'Mary', 'Sue']
console.log(names)
// console.log(names[0], 'index location 0')
// console.log(names[1], 'index location 1')
// console.log(names[2], 'index location 2')

names.forEach(name => console.log(name))

for(let i = 0; i < 3; i++) {
	console.log (names[i], i);
}


