
//Higher Order Functions

const doSomeTask = () => {
    return "Task was done."
}

const sendMessage = () => {
    return "message";
}

const doSomeTaskThreeTimes = (someTask) => {
    for(let i = 0; i < 3; i++) {
        console.log(i, someTask())
    }
}

doSomeTaskThreeTimes(sendMessage)


const createSomeTask = () => {
    const doSomeTask = () => {
        return "ya I did some task"
    }
    return doSomeTask
}

const someTask = createSomeTask()
console.log(someTask())

//more Higher Order Functions
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(12);

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

const timesTwo = (x) => {
    console.log(x * 2);
}

repeat(10, timesTwo)
