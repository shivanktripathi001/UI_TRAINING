const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Delete task on button click
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });
    
    // Mark task as complete on click
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
}