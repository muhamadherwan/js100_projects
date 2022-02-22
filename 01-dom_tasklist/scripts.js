// Title: JS DOM TASK LIST
// v:v2 (refactor to use arrow function) 
// Author: Obi Wan  
// Date: 22-02-2022


// get element vars
// get form 
const form = document.querySelector('#task-form');
// get form input
const taskInput = document.querySelector('#task');
// get task collection
const taskList = document.querySelector('.collection');
// get filter
const filter = document.querySelector('#filter');
// get clear all task button
const clear = document.querySelector('.clear-tasks');


// function get task on page load
const getTasks = () => {
    // set tasks var
    let tasks;

    // get task from ls. if tasks is empty set tasks to empty array
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // if false convert the task into string and set to tasks var
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // prepare the task list + the task value in ls
    tasks.forEach(function (task) {
        // create li element
        const li = document.createElement('li');
        // add class to li
        li.className = 'collection-item black-text';
        // add the tasks to li text 
        li.appendChild(document.createTextNode(task));
        // create link element to li
        const link = document.createElement('a');
        // add class to link
        link.className = 'delete-item secondary-content';
        // add icon to link
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);
        // append li to ul
        taskList.appendChild(li);
    });
}

// function delete all task
const clearAll = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear all task from ls
    localStorage.clear();
}

// function filter task
const filterTask = (e) => {
    // get the input & convert input to lowercase
    const text = e.target.value.toLowerCase();
    // get existing task list and check if input match task list
    document.querySelectorAll('.collection-item').forEach(function (task) {
        // get existing task text
        const item = task.firstChild.textContent;

        // check if input match in existing task list
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}

// function to load all event listeners
const eventListeners = () => {
    // load all task
    document.addEventListener('DOMContentLoaded', getTasks());

    // add task event listener
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    // filter task
    filter.addEventListener('keyup', (e) => {
        filterTask(e)
    });

    // delete task event listener
    taskList.addEventListener('click', (e) => {
        deleteTask(e);
    });

    // clear all task 
    clear.addEventListener('click', (e) => {
        clearAll();
    });
}

// function delete task
const deleteTask = (e) => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from ls
            removeFromLs(e.target.parentElement.parentElement);
        }

    }
}

// function add new task
const addTask = () => {
    if (taskInput.value === '') {
        alert('Please insert a task!');
    } else {
        // create new li
        const li = document.createElement('li');
        // add class to li
        li.className = 'collection-item black-text';
        // add the new task text and append it to li
        li.appendChild(document.createTextNode(taskInput.value));
        // create new link element
        const link = document.createElement('a');
        // add a class to the link
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append the link to li
        li.appendChild(link);
        // append new li to ul collection
        taskList.appendChild(li);

        // save to local storage
        storeInLs(taskInput.value)

        // clear new task input
        taskInput.value = '';
    }
}

// function remove from ls
const removeFromLs = (taskItem) => {
    // get task item from ls
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // delete the task from tasks array
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    // save back the array in ls
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// function store task in ls
const storeInLs = (task) => {
    // set tasks var for save
    let tasks;

    // check ls if tasks is blank. If true set tasks var to empty array
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // else get + convert existing task into string
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // insert new task into tasks array
    tasks.push(task);

    // save new tasks array back into ls
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// load all event listeners
eventListeners();







