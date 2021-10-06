// Function #1
// Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.

function square(root) {
	return root * root;
}
console.log(square(5))

function subtract(number1, number2){
	const difference = number1 - number2
	return difference
}

console.log('margin ', subtract(2000,1000))
console.log('profit ', subtract(1000,500))
console.log('doing it without the function', 2000-1000)


// 	Function #2
// Take two strings as arguments and return a value that has them concatenated.

function combineTwoStrings(string1, string2){
	return string1 + string2
}

console.log(combineTwoStrings('five ', 'one'))