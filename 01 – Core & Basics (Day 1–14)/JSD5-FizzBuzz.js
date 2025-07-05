function fizzBuzz(n) {
    if (typeof n !== "number") {
        alert('Not a number')
    }
    if (n < 0) {
        alert('Not an integer')
    }
    if (!Number.isInteger) {
        alert('Accepts only Integer')
    }
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");

        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);

        }
    }
}

fizzBuzz(50)