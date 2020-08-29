// document.getElementsByClassName
// Collection
// This have global scope
const items = document.getElementsByClassName('collection-item');
console.log(items);

items[0].style.color = 'red'; // change color for item

// This has ul scope only. 
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// Get element by tag name

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
// lis[0].style.color = 'green';

// convert html collection into array
lis = Array.from(lis);
lis.forEach(element => {
   console.log(element); 
});

lis.forEach(function(li){
    console.log(li.className);
    li.textContent = 'Hello';
});
console.log(lis);

// Query selector all

const itemList = document.querySelectorAll('ul.collection li.collection-item');
console.log(itemList);

itemList.forEach(function(item, index){
    item.textContent = `${index}`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = "#ccc";
});

liEven.forEach(function(li, index){
    li.style.background = "#fff";
});

