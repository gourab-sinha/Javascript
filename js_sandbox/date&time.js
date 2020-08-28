let val;

const today = new Date();
const birthday = new Date('9-10-1981 12:22:00');


val = today;
console.log(val);
console.log(typeof val);

console.log(birthday);

// Get month
val = today.getMonth(); // Jan - 0 and so on
console.log(val);

// Get date
val = today.getDate();
console.log(val);

// Get full year
val = today.getFullYear();
console.log(val);

// getHours
val = today.getHours(); // 24 based
console.log(val);

// Get Millisecond
val = today.getMilliseconds();
console.log(val);

// set month
birthday.setMonth(2);
console.log(birthday);

// set date
birthday.setDate(12);
console.log(birthday);

// set year
birthday.setFullYear(1996);
console.log(birthday);

// set second
birthday.setSeconds(20);
console.log(birthday);

// set minute
birthday.setMinutes(9);
console.log(birthday);
