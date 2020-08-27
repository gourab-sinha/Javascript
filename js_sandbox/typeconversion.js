let val;

// Number to string
val = String(5);

// output
console.log(val);
console.log(typeof val);
console.log(val.length); // only works for string

// Boolean to string
val = String(true);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to string
val = String([1,2,3]);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString
val = (5).toString();

// output
console.log(val);
console.log(typeof val);
console.log(val.length);


// String to number
val = Number('5');

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// Boolean to number
val = Number(true);

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// Boolean to number
val = Number(false);

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// Characters to number
val = Number('hello');

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// Null to number
val = Number(null);

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// String to integer
val = parseInt('100.30');

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// String to float
val = parseFloat('100.3003');

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Null to number
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
// output
console.log(sum);
console.log(typeof sum);
console.log(val.toFixed());

// String and Number concatination
const val3 = "5";
const val4 = 6;
const res = val3 + val4;
// output
console.log(res);
console.log(typeof res);
console.log(res.length); // String


