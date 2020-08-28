// For loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

// While loop
let i = 0;
while(i<10){
    console.log(i);
    i = i+1;
}

// do while loop
i = 0;
do{
    console.log(i);
    i += 1;
}while(i<10);

// conditions inside loop
for(i = 0; i < 10; i+=1){
    if(i%2 === 0){
        console.log(`Even ${i}`);
    }
    else{
        console.log(`Odd ${i}`);
    }
}

// Looping over array
const cars = ["Ford", "Honda", "Toyota"];
for(i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// for each
cars.forEach(function(car){
    console.log(car);
});

// Array of Map
const users = [
    {id : 1, name: 'Gourab'},
    {id : 2, name: 'Sourab'},
];
const ids = users.map(function(user){
    return user.id;
});

ids.forEach(function(id){
    console.log(`Id: ${id}`)
});

// Map traversing

const user = {
    firstName: 'Gourab',
    lastName: 'Sinha',
    age: 24,
};

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}