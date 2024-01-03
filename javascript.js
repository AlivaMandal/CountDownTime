let day =document.querySelector(".day");
let hour =document.querySelector(".hour");
let min =document.querySelector(".min");
let sec =document.querySelector(".sec");


function updateCount() {
    const CurrentTime = new Date();
    const newYear = new Date("1 jan 2024");       //12AM, 1st Jan, 2024

    const timeOff = CurrentTime - newYear;

    const days =Math.floor(timeOff / (1000 * 60 * 60 * 24));
    const hours =  Math.floor((timeOff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeOff % (1000 * 60 * 60)) / (1000 * 60 ));
    const secs = Math.floor((timeOff % (1000 * 60)) / 1000);

    //const countDownTime  = `${days}d ${hours}h ${mins}m ${secs}s`;

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML =  mins;
    sec.innerHTML = secs; 

   // countdown.innerHTML = countDownTime;
}

setInterval(updateCount, 1000);              //update countdown in everry seconnds

updateCount();                            // initial call to set the initial countdown