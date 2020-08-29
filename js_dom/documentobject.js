let val;

val = document;
val = val.all; // collection of tags
console.log(val);

// explore tags using indexing
console.log(val[0]);

// Properties
console.log(val.length)

// head
console.log(document.head);

// forms
var forms = document.forms;
console.log(forms);

// Single Form
console.log(forms[0]);

// attributes
console.log(forms[0].method);

// links
console.log(document.links);

// collection of classes
console.log(document.links[0].classList);

// collection of images
console.log(document.images)

// collection of scripts
console.log(document.scripts)

// attribute of scripts
console.log(document.scripts[0].getAttribute('src'));

// scripts
let scriptsArray = Array.from(document.scripts);

scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});