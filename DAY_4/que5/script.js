const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  
  li.addEventListener('dblclick', () => {
    li.remove();
  });
  
  taskList.appendChild(li);
  taskInput.value = '';
});
