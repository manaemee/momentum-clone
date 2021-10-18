const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput =toDoForm.querySelector("#todo-form input");


let toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id= newToDo.id;
  const span = document.createElement("span");
  span.innerText=newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function onhandleSubmit(event){
event.preventDefault();
const newToDo = toDoInput.value;
const newToDoObj = {
  text : newToDo,
  id : Date.now(),
}
toDos.push(newToDoObj);
saveToDos()
toDoInput.value="";
paintToDo(newToDoObj)

}


toDoForm.addEventListener("submit", onhandleSubmit);
const savedTodos = localStorage.getItem("todos");

if(savedTodos){
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}