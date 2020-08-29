// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Styling
document.getElementById('task-title').style.background ='#333';
document.getElementById('task-title').style.color ='#fff';
document.getElementById('task-title').style.padding = '5px'; 
// document.getElementById('task-title').style.display ='none';
document.getElementById('task-title').textContent ='Task List';
document.getElementById('task-title').innerText ='My tasks';

document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>'


// Query Selector

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); // only first one

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello Word';
document.querySelector('li:nth-child(odd)').style.color = 'green'; // only first one.
document.querySelector('li:nth-child(even)').style.color = 'violet'; // only first one