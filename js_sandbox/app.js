// single line comment
/*
    Multiline comment
*/
console.log('Hello world');
console.log(123);
console.log(true);
var greeting = 'hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('Error message');
console.clear(); // clears the screen
console.warn('The warning message!');
console.time();
    console.log('Check time');
console.timeEnd(); // time taken to execute

// Variable and data types

var name = "Gourab Sinha";
console.log(name);
name = "Sinha Gourab"; // reassignment
console.log(name);

// Init var
var greeting;
console.log(greeting)
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $ can be used as starting of variable name
// Cannot start with number

var _name = 'John'; // used for private
console.log(_name);

// Multi word vars
var firstName = "Gourab";
var first_name = "Gourab";
var FirstName = "Tom";
var firstname;

// let and var works as same

const firstNameConst = 'Gourab'; // cannot define without initializing it
console.log(firstNameConst);

// object values can be altered but cannot reassigned with new values.
const person = {
    name: 'John',
    age: 30
}

/* This is not possible
person = {
    firstName: 'Gourab',
    lastName: 'Sinha'
}
console.log(person)


console.log(person)
*/

