// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');
//     // e.preventDefault(); prevents default behaviour
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // Object
    console.log(e);
    
    let val;

    val = e;

    // Event target element
    val = e.target;
    console.log(val);

    // Target Id
    val = e.target.id;
    console.log(val);

    // Target classname
    val = e.target.className;
    console.log(val);

    // Target classList
    val = e.target.classList;
    console.log(val);

    // Change inner text
    e.target.innerText = 'Change';
    console.log(val);

    // Event Type
    val = e.type;
    console.log(val);

    // Timestamp
    val = e.timeStamp;
    console.log(val);

    // Coords event relative to the window Vertical
    val = e.clientY;
    console.log(val);

    // Coords event relative to the window Horizontal
    val = e.clientX;
    console.log(val);

    // Coords event relative to the window Offset
    val = e.offsetY;
    console.log(val);

    // Coords event relative to the window Offset
    val = e.offsetX;
    console.log(val);


}   