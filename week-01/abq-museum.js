// Get customer's age
// Check if they are a foundation member
// Check if NM resident
// if 3yo or younger or is Member, then the price free
// if age > 3 and age < 13 then $3
// if age >= 65 then $4
// if (age < 65 and age >12) {
// 	if resident then $5 otherwise $6
// }

const age = 35
const member = false
const resident = true
let price

if (age < 4 || member) {
	price = 'free'
}else if (age > 3 && age < 13){
	price = 3
}else if (age >= 65){
	price = 4
}else if(resident) {
	price = 5
}else{
	price = 6
}
console.log(price)