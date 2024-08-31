const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton'); // Corrigido
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.text}
            <div class="task-buttons">
                <button class="completeButton">${task.completed ? 'Desfazer' : 'Concluir'}</button>
                <button class="deleteButton">Excluir</button>
            </div>
        `;

        li.querySelector('.completeButton').addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed; // Alternar estado de 'completed'
            saveTasks();
            renderTasks();
        });

        li.querySelector('.deleteButton').addEventListener('click', () => {
            tasks.splice(index, 1); 
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = ''; 
    }
});

renderTasks();