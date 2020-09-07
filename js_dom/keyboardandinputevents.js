const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// Clear input
taskInput.value ='';

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`);

//     // Get value
//     console.log(taskInput.value);
//     e.preventDefault();
// }

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`);

//     // Get value
//     console.log(e.target.value);

//     // heading.innerText = e.target.value;
//     // e.preventDefault();
// }

// Keydown
// taskInput.addEventListener('keyup', runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`);

//     // Get value
//     console.log(e.target.value);

//     // heading.innerText = e.target.value;
//     // e.preventDefault();
// }

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`);

//     // Get value
//     console.log(e.target.value);

//     // heading.innerText = e.target.value;
//     // e.preventDefault();
// }


// Focus
// taskInput.addEventListener('focus', runEvent);

// Focus
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Focus
// taskInput.addEventListener('paste', runEvent);

// Input - cut paste
// taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`Event type: ${e.type}`);

    // Get value
    console.log(e.target.value);

    // heading.innerText = e.target.value;
    // e.preventDefault();
}