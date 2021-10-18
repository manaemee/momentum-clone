
const loginInput = document.querySelector("#login-form-firstinput");


function onLoginSubmit(event) {
    const username= loginInput.value;
    localStorage.setItem("username", username);
}
  
loginForm.addEventListener("submit", onLoginSubmit);

