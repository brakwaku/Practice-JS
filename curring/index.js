const root = Document.querySelector('#root');

// Composing and Piping

let input = “   Javascript   “;
let output = “<div>” + input.trim() + “</div>”;

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

// In the above code we have to read the ‘result’ value from the right

// Using lodash

// npm i lodash

// import { compose, pipe } from ‘lodash/fp’;

// Simplified but still needs to be read from the right
const transform1 = compose(wrapInDiv, toLowerCase, trim);
transform(input);

// Using pipe, we specify the order of the function calls in the argument.
const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);


// Curring

// This is similar to wrapInDiv
const wrapInSpan = str => `<span>${str}</span>`;

// So instead we will create a new function ‘wrap’;

const wrap = (type, str) => `<${type}>${str}</${type}>`; // Curring used in next line
const wrapC = type => str => `<${type}>${str}</${type}>`;
const transformC = pipe(trim, toLowerCase, wrap('div')); // We can pass in either div or span
transform(input);


// Example
function add(a) {
    return function(b) {
        return a + b;
    }
}

const add2 = a => b => a + b;  // (a, b) => a + b;

add(1)(5);  // add(1, 5)
// N => 1