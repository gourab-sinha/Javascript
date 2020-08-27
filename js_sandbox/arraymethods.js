// Create array
const numbers1 = [45,324,45,23,5]; // Number array
const numbers2 = new Array(23,34,45,56,); // Dynamically created Array
const fruit = ["Apple", "Banana", "Orange"]; //String array
const mixed = [23,"Hell", true];  // Hybrid array

let val;

// Get array length
val = numbers1.length;
console.log(val);

// Check if is array
val = Array.isArray(numbers1); // If yes true else false
console.log(val);

// Get single value
val = numbers1[3]; // zero based indexing
console.log(val); 

// Insert
numbers1[2] = 100;
console.log(numbers1);

// indexOf
val = numbers1.indexOf(100); // -1 if does not exist
console.log(val);

// Mutating arrays
numbers1.push(250); // add at the last
console.log(numbers1);

numbers1.unshift(120); // add at the front
console.log(numbers1);

numbers1.pop(); // from the end
console.log(numbers1);

numbers1.shift(); // remove from front
console.log(numbers1);

// Slice
numbers1.splice(1,3); // removes elements in the range
console.log(numbers1);

// Reverse
console.log(numbers2);
numbers2.reverse();
console.log(numbers2);

// Concat arrays
val = numbers2.concat(numbers1);
console.log(val);

// Sort
val = fruit.sort(); // sort based on ascending order if string then ascii value
console.log(val);

// Sort with comparator
val = numbers2.sort(function(x, y){ // ascending order
    return x-y;
})
console.log(val);

val = numbers2.sort(function(x, y){ // descending order
    return y-x;
})
console.log(val);

// Find
function under50(num){
    return num <50;
}

val = numbers2.find(under50);
console.log(val);