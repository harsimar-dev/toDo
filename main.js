const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todoitems = document.querySelector('.todoitems');


let todos = [];

form.addEventListener('submit', function(event){

event.preventDefault();
addTodo(input.value);

});

function addTodo(item){

if (item !== ''){

  const todo = {
     id: Date.now(),
     name: item,
     completed: false
  };

todos.push(todo);
addToLocalStorage(todos);

input.value = '';

}

}

function renderTodos(todos){

todoitems.innerHTML = '';

todos.forEach(function(item){

     const checked = item.completed? 'checked': null;

      const li = document.createElement('li');
      li.setAttribute('class','item');
      li.setAttribute('data-key',item.id);

      if(item.completed === true){
        li.classlist.add('checked');
      }

      li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;

     todoitems.append(li);
});

}

function addToLocalStorage(todos){
  localStorage.setItem('todos',JSON.stringify(todos));
  renderTodos(todos);
}

function toggle(id){
  todos.forEach(function(item){
    if(item.id == id){
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

function deleteTodo(id){
  todos = todos.filter(function(item){
    return item.id != id;
  })
}
