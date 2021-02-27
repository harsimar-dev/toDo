let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField')



addToDoButton.addEventListener('click' , function(){

  var paragraph = document.createElement('p')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";

  paragraph.addEventListener('click', function(){

       paragraph.style.textDecoration = "line-through";
  })

  paragraph.addEventListener('dblclick',function(){

       toDoContainer.removeChild(paragraph);
  })

  updatelist();

})

function updatelist(){

var itemsText = document.querySelectorAll('p');
var items = [];

itemsText.forEach(item=> {
  items.push(item.value);
})

localStorage.setItem("items",JSON.stringify(items));

}
