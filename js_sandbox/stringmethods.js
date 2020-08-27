const firstName = "Gourab";
const lastName = "Sinha";

let val;

// Concatination 
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = "New ";
val += "Language";
console.log(val);

// Escaping
val = 'That\'s awesome, I can\'t wait';
console.log(val)

// Length property
console.log(val.length);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Upper case
val = firstName.toUpperCase();
console.log(val);

// Lower case
val = firstName.toLowerCase();
console.log(val);

// Access with index value
val = firstName[0];
console.log(val);

// indexOf()
val = firstName.indexOf('b');
console.log(val);

// indexOf()
val = firstName.lastIndexOf('b');
console.log(val);

// indexOf()
val = firstName.charAt(1);
console.log(val);

// indexOf()
val = firstName.charAt(firstName.length - 1);
console.log(val);

// substring
val = firstName.substring(0,3);
console.log(val);

// slice
val = firstName.slice(0,3);
console.log(val);

// slice
val = firstName.slice(-3);
console.log(val);

// split based on sperator
const str = "I am Gourab Sinha";
val = str.split(" ");
console.log(val);

// replace
val = str.replace('Gourab', 'Sourab');
console.log(val);

// include returns boolean
val = firstName.includes('rab');
console.log(val);

