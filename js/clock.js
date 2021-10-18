const clock = document.querySelector("#clock");
function getTime(){
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${Hour}:${Minutes}:${Seconds}`;
}
getTime();
setInterval(getTime, 1000);