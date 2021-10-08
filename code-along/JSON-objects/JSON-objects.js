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

// const walk = function(){console.log('walking slow')}
// function walk (){console.log('walking slow')}


let anotherPerson = {
	name: 'Sue',
	age: 27,
	hairColor: 'brown',
	run: function(){console.log('walking')}
}
console.log('another person hair color ', anotherPerson.hairColor)
anotherPerson.run()

// array of 2 people objects
let people = [person, anotherPerson,{ name: 'Mary', age: 32, hairColor: 'pink', run: function(){console.log('walking fast')} }]
console.log(people[0])
console.log(people)
console.log(people[2])
console.log(people[2].name + ' has ' + people[2].hairColor + ' hair.')
