const achieveForm = document.querySelector("#achieve-form");
const achieveList = document.querySelector("#achieve-list");
const achieveInput =document.querySelector("#achieve-form input");

let achieveDos = [];

function saveAchieve(){
  localStorage.setItem("achieves", JSON.stringify(achieveDos));
}

function deleteAchieves(event){
  const li = event.target.parentElement;
  li.remove();
  achieveDos = achieveDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveAchieve()
}

function paintAchieve(newAchieve){
  const li = document.createElement("li");
  li.id= newAchieve.id;
  const span = document.createElement("span");
  span.innerText=newAchieve.text;
  const button = document.createElement("button");
  button.innerText = "✓";
  li.appendChild(span);
  li.appendChild(button);
  achieveList.appendChild(li);
  button.addEventListener("click", deleteAchieves);
}

function onhandleAchieveSubmit(event){
event.preventDefault();
const newAchieve = achieveInput.value;
const newAchieveObj = {
  text : newAchieve,
  id : Date.now(),
}
achieveDos.push(newAchieveObj);
saveAchieve()
achieveInput.value="";
paintAchieve(newAchieveObj)
}


achieveForm.addEventListener("submit", onhandleAchieveSubmit);
const savedAchieve = localStorage.getItem("achieves");

if(savedAchieve){
  const parsedToDos = JSON.parse(savedAchieve);
  achieveDos = parsedToDos;
  parsedToDos.forEach(paintAchieve);
}