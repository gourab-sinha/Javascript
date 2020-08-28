// Function declaration
function greet1(firstname, lastname){
    return 'hello' + ' ' + firstname + ' ' + lastname;
}

// Calling
console.log(greet1('Gourab', 'Sinha'));

// Function declaration with default
function greet2(firstname = 'Gourab', lastname ='Sinha'){
    return 'hello' + ' ' + firstname + ' ' + lastname;
}

// Calling
console.log(greet2());

// Function expression

const square = function(x){
    return x*x;
};

console.log(square(3));

// Immediate invokable function expression. 
(function(){
    console.log('IIFE Ran.. ');
})();


(function(name){
    console.log(`Hello ${name}`);
})('Gourab');

// Property method

const todo = {
    add: function(){
        console.log("Add todo...");
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.add();
todo.edit(1);

todo.delete = function(){
    console.log('Delete todo...');
}

todo.delete();