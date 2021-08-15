const   second = 1000,
        minute = second*60,
        hour = minute*60,
        day = hour*24;

countDownTimer = ()=>{
    const  launchDate = new Date(2021, 7,25, 00,00, 00).getTime(),
            date = new Date().getTime();
            remainingTime = launchDate - date;
            days = Math.floor(remainingTime/day);
            hours = Math.floor(remainingTime%day/hour);
            minutes = Math.floor(remainingTime%hour/minute);
            seconds = Math.floor(remainingTime%minute/second);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    if(remainingTime <= 0)document.querySelector("#data-container").textContent = "We are launching!"
    else {
        document.querySelector("#days").textContent = days;
        document.querySelector("#hours").textContent = hours;
        document.querySelector("#minutes").textContent = minutes;
        document.querySelector("#seconds").textContent = seconds;
    }
}

setInterval(countDownTimer,1000);