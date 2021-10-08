const myArray = ['Jim', 28, 'red']
console.log(myArray[2])

let person = {
	name: 'Jim',
	age: 28,
	hairColor: 'red',
	run: function(){console.log('running')}
}

console.log(person.age)
person.run()
person.age = person.age + 1
console.log(person.age)
