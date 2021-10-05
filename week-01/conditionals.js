// Get the current hour of the day.
let date = new Date()
let time = date.getHours();

// Output a customized message.
if (time < 10) {
	console.log('Have a good morning!');
} else if (time < 20) {
	console.log('Have a good day!');
} else {
	console.log('Have a good night!');
}