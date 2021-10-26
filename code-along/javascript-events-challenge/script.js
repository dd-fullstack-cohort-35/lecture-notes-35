function changeTextColor() {
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);

    document.getElementById('text-color').style.color = `rgb(${red}, ${green}, ${blue})`;
}

function resetTextColor() {
    document.getElementById('text-color').style.color = '';
}

function findReplace(event) {
    event.preventDefault()
    let text = document.getElementById('find-replace').innerText
    const searchTerm = document.getElementById('text-find').value
    const replacementTerm = document.getElementById('text-replace').value

    document.getElementById('find-replace').innerText = text.replace(searchTerm, replacementTerm)

}

function findReplaceRegex(event) {
    event.preventDefault()
    let text = document.getElementById('find-replace').innerText
    const searchTerm = document.getElementById('text-find-reg').value
    const replacementTerm = document.getElementById('text-replace-reg').value

    const reg = new RegExp(searchTerm, 'gi')

    document.getElementById('find-replace').innerText = text.replace(reg, replacementTerm)

}

function shuffleText() {
    const textArray = document.getElementById('shuffle').textContent.split(' ')
    let count = 0;

    textArray.forEach(value => {
        for(let i = textArray.length; i > 0; i--) {
            count++
            //create a random index bound to the length of our paragraph
            let randomNumber = Math.floor(Math.random() * (i + 1))
            //grab the current index
            let currentIndex = textArray[i]
            //reassign current index to a random index
            textArray[i] = textArray[randomNumber]
            //reassign random index to the current one
            textArray[randomNumber] = currentIndex
        }
    })

    document.getElementById('shuffle').textContent = textArray.join(" ")
}

function caesarCipher(event) {
    event.preventDefault()
    let encodedValues = {
        a: 'm', b: 'm', c: 'n', d: 'o', e: 'p', f: 'q', g: 'r', h: 's', i: 't',
        j: 'u', k: 'v', l: 'w', m: 'x', n: 'y', o: 'z', p: 'a', q: 'b', r: 'c',
        s: 'd', t: 'e', u: 'f', v: 'g', w: 'h', x: 'i', y: 'j', z: 'k'
    }

    //convert to lower case
    let codeWord = document.getElementById('encoder').value.toLowerCase();
console.log(codeWord)
    //encode the word
    let encoded = '';
    for(let i = 0; i < codeWord.length; i++) {
        encoded += encodedValues[codeWord[i]]
    }

    document.getElementById('encoded').textContent = encoded
}

