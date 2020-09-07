const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mousedown
// clearBtn.addEventListener('mouseup', runEvent);

// Mousedown
// card.addEventListener('mouseenter', runEvent);

// Mousedown
// card.addEventListener('mouseleave', runEvent);

// Mouseover inside another element
// clearBtn.addEventListener('mouseover', runEvent);

// Mouseout outside another element
// clearBtn.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}