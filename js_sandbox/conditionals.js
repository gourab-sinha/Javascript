const id = 100;

// Equal to
if(id == 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// Not equal to

if(id != 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// Equal to value and type

if(id === 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// Not equal to value and type

if(id !== 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// Test if undefined. 
if(typeof id!== 'undefined'){
    console.log(`The ID is' + ${id}`);
}
else{
    console.log('No ID');
}

// Greater to value and type

if(id >= 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// less to value and type

if(id < 101){
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// IF ELSE

const color = 'red';

if(color === 'red'){
    console.log('red');
}
else if(color === 'blue'){
    console.log('blue');
}
else{
    console.log('not red or blue');
}

// Logical operators
const name = 'Gourab';
const age = 20;

if(age > 0 && age< 12){
    console.log(`${name} is child`);
}
else if(age >= 13 && age <=19){
    console.log(`${name} is teneager`);
}
else{
    console.log(`${name} is adult`);
}


// OR ||

if(age < 16 || age > 65){
    console.log(`${name} cannot run in the race`);
}
else{
    console.log(`${name} is register in race`);
}

// Ternary operator
console.log(id===100 ? 'Correct' : 'Incorrect');
