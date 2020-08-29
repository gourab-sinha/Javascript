let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// console.log(listItem);

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
console.log(val);
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
console.log(val);

// Specific
val = list.children[1];
console.log(val);

// Change content
list.children[1].textContent = 'Hello';
console.log(val);

// Children of child
val = list.children[3].children[0]; 
console.log(val);

// update children of child
list.children[3].children[0].id = 'test-link'; 

// first child
val = list.firstChild;
console.log(val);

// first child
val = list.firstElementChild;
console.log(val);

// last child
val = list.lastChild;
console.log(val);

// last child
val = list.lastElementChild;
console.log(val);

// children count
val = list.childElementCount;
console.log(val);

// Parent of element
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
console.log(val);

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);