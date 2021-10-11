// # Snap Challenge: More Functions

// Write an function, that converts weights to grams. The function should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and output it.

function convertWeightToGrams (weight, units){
	let grams = 'please provide a valid unit of weight'
	if (units === 'lbs'){
		grams = weight * 453.592
	}else if (units === 'oz'){
		grams = weight * 28.3495
	} else if (units === 'kg'){
		grams = weight / 1000
	} else if (units === 'mg'){
		grams = weight / 1000
	} else if (units === 'g'){
		grams = weight
	}
	return grams
}

console.log(convertWeightToGrams(1, 'lbs'))
console.log(convertWeightToGrams(2, 'buckets'))









	// Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)