// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

function countNumbers (arrayOfNumbers){
	let counterArray = []
	arrayOfNumbers.forEach((numberFromArray) =>
		counterArray[numberFromArray] =
			counterArray[numberFromArray] ? counterArray[numberFromArray] + 1 : 1)
	return counterArray
}

console.log( countNumbers([3,2,3,5,4,3,5]))

// ternary operator
// like an IF, ELSE statement
// used when assigning values
// boolean expression ? value if true : value if false


// 2. In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both.

function fizzBuzz (number1, number2){
	const largerNumber = number1 > number2 ? number1 : number2
	const smallerNumber = number1 > number2 ? number2 : number1

	for(let i = smallerNumber; i <= largerNumber; i++){
		if(i % 2 === 0 && i % 3 === 0){
			console.log('baz')
		}else{
			if (i % 2 === 0){
				console.log('fizz')
			}
			if (i % 3 === 0){
				console.log('buzz')
			}
		}
	}
}
fizzBuzz(5,30)

console.log('0' == 0)
console.log('0' === 0)
console.log(0 === 0)


