// Set local storage item
localStorage.setItem('name', 'Gourab');
localStorage.setItem('age', '30');

// Session storage.
sessionStorage.setItem('name', 'Gourab');

// remove from storage
localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(element => {
    console.log(element);
});
