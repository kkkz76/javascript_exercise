for(let x = 0; x <=20; x++) {
    if (x % 5 === 0 && x %3 === 0) {
        console.log('Fizzbuzz')
    } else if (x % 5 === 0) {
        console.log('Buzz')
    } else if (x % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(x)
    }
}