const Timer = document.querySelector("#timer");

function getLeftTime(){
    const now = new Date();
    const newyear = new Date('2022-01-01T00:00:00');
    const left_time = new Date(newyear-now);
    const milliDays = Math.floor((left_time/ (1000 * 60 * 60 * 24)));
    const milliHours = Math.floor(((left_time/ (1000 * 60 *60 )) % 24 ));
    const milliMinutes=Math.floor(((left_time / (1000 * 60 )) % 60 ));
    const milliSeconds=Math.floor((left_time / 1000 ) % 60);
    const days = (milliDays < 10) ? `0${milliDays}d` : `${milliDays}d`;
    const hours = (milliHours < 10) ? `0${milliHours}h` : `${milliHours}h`;
    const minutes=(milliMinutes < 10) ? `0${milliMinutes}m` : `${milliMinutes}m`;
    const seconds=(milliSeconds < 10) ? `0${milliSeconds}s` : `${milliSeconds}s`;
    Timer.innerText = `${days} ${hours} ${minutes} ${seconds} `;
}
getLeftTime();
setInterval(getLeftTime,1000);