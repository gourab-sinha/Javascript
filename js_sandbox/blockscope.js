// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test(){
    // None of them will be impacted as scope is function scope.
    var a = 4; 
    let b = 5;
    const c = 6;
    console.log('Function Scope', a, b, c);    
}
test();

if(true){
    var a = 4; // impacted
    let b = 5; // not impacted
    const c = 6; // not impacted
    console.log('If Scope', a, b, c);    
}

for(let a = 0; a < 10; a+=1){
    console.log(a);
}

console.log('Global Scope', a, b, c);

/*
NOTE: var type variable will be impacted for any modification in local scope. 
*/

