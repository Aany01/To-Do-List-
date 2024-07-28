document.addEventListener('DOMContentLoaded', (event) => {
    loadInitialTasks();
});

function loadInitialTasks() {
    const initialTasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
    initialTasks.forEach(task => addTask(task));
}

function addTask(taskText) {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const task = taskText || taskInput.value;
    if (!task) return;

    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task;
    input.disabled = true;

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = () => toggleEdit(input, editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = () => taskList.removeChild(li);

    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    if (!taskText) taskInput.value = '';
}

function toggleEdit(input, button) {
    if (input.disabled) {
        input.disabled = false;
        button.innerHTML = 'Save';
    } else {
        input.disabled = true;
        button.innerHTML = 'Edit';
    }
}
