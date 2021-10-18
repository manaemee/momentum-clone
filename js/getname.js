const savedUsername = localStorage.getItem("username");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");


function inputValue(){
  const savedUsername = localStorage.getItem("username");
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove("hidden");

}


if(savedUsername === null){

}else{
  inputValue()
};
