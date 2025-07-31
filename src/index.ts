import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

let tasks: Task[] = loadTask();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input?.value.trim() == '' || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  saveTask();
  addListItem(newTask);
  input.value = '';
});

function addListItem(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTask();
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    const id = task.id;
    if (tasks.length) {
      tasks = tasks.filter((task: Task) => task.id !== id);
      saveTask();
      item.remove();
    }
  });

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(' ' + task.title + ' '));
  label.appendChild(deleteButton);

  item.appendChild(label);
  list?.appendChild(item);
}

function saveTask() {
  localStorage.setItem('TS_TODO', JSON.stringify(tasks));
}

function loadTask(): Task[] {
  const taskJSON = localStorage.getItem('TS_TODO');
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
