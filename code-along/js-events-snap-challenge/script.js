function changeButtonColor (){
	let button = document.getElementById('target')
	if(button.style.backgroundColor === 'red') {
		button.style.backgroundColor = 'green'
	}else{
		button.style.backgroundColor = 'red'
	}
}