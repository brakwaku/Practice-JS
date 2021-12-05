// Write a program that console logs the numbers from 1 to n. But
// for multiples of three print "fizz" instead of the number and
// for the multiples of 5 print "buzz". For numbers which are 
// multiples of bothe three and five print "fizzbuzz"

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        // Check if number is multiple of 3 and 5
        // if(i % 15 === 0) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            // Is the number a multiple of 3
            console.log('fizz');
        } else if (i % 5 === 0) {
            // Is the number a multiple of 5
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
