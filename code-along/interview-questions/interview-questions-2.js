// # Snap Challenge: Interview Questions #2
//
// 1. In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed.
function removeVowels(myString){
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let filteredString = ''
	Array.from(myString).forEach(letter => {
		if(!vowels.includes(letter)){
			filteredString = filteredString + letter
		}
	})
	return filteredString
}
console.log(removeVowels('pseudocode'))


// 2. In pseudocode, write a function that takes an array of numbers and returns the greatest number in the array.

function findHighestNumber(arrayOfNumbers){
	return Math.max(...arrayOfNumbers)
}
console.log(findHighestNumber( [1,2,3,4,5,6,7]))


// 3. In pseudocode, write a function that computes the first 100 numbers in the Fibonacci sequence. The Fibonacci sequence is created by adding the two previous numbers in the sequence together, and starts 0, 1, 1, 2, 3, 5, 8, ...

function fibonacci(number){
	let fibArray = [0,1]
	for(let i = 2; i < number; i++){
		fibArray.push(fibArray[i-1] + fibArray[i-2])
	}
	return fibArray
}

console.log (fibonacci(100))