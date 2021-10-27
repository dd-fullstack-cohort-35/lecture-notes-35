// Using the foreach loop display this array of text to the DOM.
//
// ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
//
// Hint: Each array element must appear in it's own html tag in the browser.
//
// Extra Credit: use map or reduce.


const names = ['Alice', 'Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah', 'Zach']

const moreNames = ['Fred', 'Jen', 'Harry', 'Karen']

const namesForEach = (names) => {

    let myList = document.getElementById('for-each')

    names.forEach(name => {
        let li = document.createElement('li');
        li.innerText = name
        myList.appendChild(li);
    });

}

function namesMap(moreNames) {
    let mySection = document.getElementById('map')

    moreNames.map(name => {
        mySection.innerHTML += "<p>" + name + "</p>"
    })

}

function namesReduce(names) {
    let myDiv = document.getElementById('reduce');

    names.reduce(function(html, name) {
        // let pElement = document.createElement('p');
        // pElement.textContent = name;
        html += '<p>' + name + '</p>';
        return myDiv.innerHTML= html;
    }, '');
}

namesForEach(names);
namesMap(moreNames);
namesReduce(names);

