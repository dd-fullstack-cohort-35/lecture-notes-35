function changeTextColor(){
	console.log('button clicked')
	let pTag = document.getElementById('target')
	console.log(pTag)
	const red = Math.floor(Math.random()*255)
	const green = Math.floor(Math.random()*255)
	const blue = Math.floor(Math.random()*255)
	pTag.style.color = `rgb(${red}, ${green}, ${blue})`
}

function rotateText(event){
	console.log(event.target.style.transform)
	const randomAngle = Math.floor(Math.random()*360)
	event.target.style.transform =  `rotate(${randomAngle}deg)`
}