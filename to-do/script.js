document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        
        const li = document.createElement('li');
        li.textContent = `• ${taskText}`; 

        
        document.getElementById('task-list').appendChild(li);

        
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Clear button functionality
document.getElementById('clear-task-btn').addEventListener('click', function() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
});
