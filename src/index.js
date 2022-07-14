import './index.css';

const todos = JSON.parse(localStorage.getItem('todos')) || [
  {
    description: 'Going to gym',
    completed: false,
    id: new Date().getTime(),
  },
  {
    description: 'visite th doctor',
    completed: false,
    id: new Date().getTime(),
  },
]; // localstorage with array

const DisplayTodos = () => {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.completed;
    span.classList.add('bubble');

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');

    content.innerHTML = `<input type="text" value="${todo.description}" readonly>`;
    edit.innerHTML = '<i class="fas fa-edit"></i>';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);
  });
};

const newTodoForm = document.querySelector('#new-todo-form');
const submit = () => {
  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      description: e.target.elements.content.value,
      completed: false,
      id: new Date().getTime(),
    };

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset the form
    e.target.reset();

    DisplayTodos();
  });
};

window.addEventListener('load', () => {
  submit();
  DisplayTodos();
});

const reload = () => {
  document.querySelector('#reload').addEventListener('click', () => {
    location.reload(); // eslint-disable-line
  });
};
reload();
