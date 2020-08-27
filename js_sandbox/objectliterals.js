const person = {
    firstName: 'Gourab',
    lastName: 'Sinha',
    age: 24,
    email: 'gourabsinha@gmail.com',
    hobbies: ['Music', 'Sprots'],
    address: {
        city : 'Dalkhola',
        state: 'WB'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    } 
};

let val;
val = person;
console.log(val);

// Get Specific value
val = person.firstName;
// val = person['firstName'];
console.log(val);

val = person.lastName;
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[0]; // accessing using indexing
console.log(val);

val = person.address.state; // accessing with property
console.log(val);

val = person.getBirthYear(); // value with custom function
console.log(val);

const people = [
    {name: 'Gourab', age: 30},
    {name: 'Sinha', age: 30},
]

for (let i = 0; i< people.length; i++){
    console.log(people[i]);
}