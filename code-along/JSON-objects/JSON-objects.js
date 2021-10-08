const myArray = ['Jim', 28, 'red']
console.log(myArray[2])

// objects have key/value pairs
let person = {
	name: 'Jim',
	age: 28,
	hairColor: 'red',
	run: function(){console.log('running')}
}
// We access object's state values with a dot
console.log(person.age)
// objects can contain functions also know as methods
person.run()
person.age = person.age + 1
console.log(person.age)
