const secondHand = document.getElementById("seconds-hand")
const minuteHand = document.getElementById("minute-hand")
const hourHand = document.getElementById("hour-hand")
function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    const timeInterval = 6;
    secondHand.style.transform = 'rotate(' + (seconds *timeInterval)+ 'deg';
    minuteHand.style.transform = 'rotate(' + (minute *timeInterval + seconds/10)+ 'deg';
    hourHand.style.transform = 'rotate(' + (hour * 30 + minute / 2)+ 'deg';


}
setInterval(getTime,100)