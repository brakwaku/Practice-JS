// CURRYING
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

multiply(3, 4); // Output 12.
curriedMultiply(3)(4); // Output 12.

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); // Output 25.
multiplyBy5(10); // Output 50.
multiplyBy5(11); // Output 55.


// COMPOSE (Putting 2 fnx together to form a 3rd fnx where the output of 1 fnx is the input of the other)
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // Output 7.


// ADVANCED ARRAYS
const array = [1, 2, 10, 16];

const double = [];
// const newArray = array.forEach((num) => {
// 	double.push(num * 2);
// });
const newArray = array.forEach(num => {
	double.push(num * 2);
});

console.log('forEach', double); // Output: forEach > (4) [2, 4, 20, 32]

// MAP
// const mapArray = array.map((num) => {
// 	return num * 2;
// });
const mapArray = array.map(num => num * 2);

console.log('map', mapArray); // Output: map > (4) [2, 4, 20, 32]

// FILTER
// const filterArray = array.filter((num) => {
// 	return num > 5;
// });
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray); // Output: filter > (2) [10, 16]

// REDUCE
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0); //The 2nd parameter is the default value for *accumulator

console.log('reduce', reduceArray); // Output: reduce 29


const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5); //The 2nd parameter is the default value for *accumulator

console.log('reduce', reduceArray); // Output: reduce 34


// ADVANCED OBJECTS
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2; // Output true
object1 === object3; // Output false

object1.value = 15; // Output 15
object2.value; // Output 15
object3.value; // Output 10

// context vs scope
const object4 = {
	a: function () {
		console.log(this);
	}
}

// instantiation
class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi i am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEEEEEE I am a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// PASSING OBJECTS BY VALUE & BY REFERENCE
let obj = { a: 'a', b: 'b', c: { deep: 'try and coppy me' } };

let obj2 = obj; // By reference
let clone = Object.assign({}, obj); // By value (Shallow clone: if c.deep is changed it will affect all instances)
let clone2 = { ...obj }; // By value (Shallow clone: if c.deep is changed it will affect all instances)
let superClone = JSON.parse(JSON.stringify(obj)); // Deep clone (if object is big this will take a lot of time)


// ES7   .includes
'Helloooo'.includes('o'); // Output true.

const pets = ['cat', 'dog', 'fish', 'goat'];
pets.includes('dog'); // Output true.
pets.includes('bat'); // Output false.

// Exponential operator
const square = (x) => x**2;
const cube = (y) => y**3;
square(2); // Output 4
square(5); // Output 25
cube(3); // Output 27
cube(4); // Output 64


// ES8    string padding   .padStart()  .padEnd()
'Turtle'.padStart(10); // Output "          Turtle"
'Turtle'.padEnd(10); // Output "Turtle          "

const fun = (a,b,c,d,) => {console.log(a)};

fun(1,2,3,4,);  // Output 1.


let theObj = {
	username0: 'Santa',
	username1: 'Moga',
	username2: 'Kawawa'
}

Object.keys(theObj).forEach((key, index) => {
	console.log(key, theObj[key]);
});
// OUTPUT
// username0: Santa
// username1: Moga
// username2: Kawawa

Object.values(theObj).forEach(value => {
	console.log(value);
});
// OUTPUT
// Santa
// Moga
// Kawawa

Object.entries(theObj).forEach(value => {
	console.log(value);
});
// OUTPUT
// ["username0", "Santa"]
// ["username1", "Moga"]
// ["username2", "Kawawa"]


Object.entries(theObj).map(value => {
	return value[1] + value[0].replace('username', '');
});
// OUTPUT
// ["Santa0", "Moga1", "Kawawa2"]

// ES10 (2019)
const arrayES10 = [1,2,[3,4,[5]]];
arrayES10.flat();  // Output [1,2,3,4,[5]]. Default parameter is 1
arrayES10.flat(2);  // Output [1,2,3,4,5]. If there are multiple nested arrays, use very high parameter to flat

const entriesES10 = ['bob', 'sally',,,,,,,'cindy'];
entriesES10.flat(); // Output ["bob", "sally", "cindy"].

// FlatMap