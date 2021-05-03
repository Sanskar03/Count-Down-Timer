
const newYears = "1 Jan 2022";


function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

}

function formatTime(time)
{
    return time < 10 ? '0'+time : time;
}


countdown();
setInterval(countdown,1000);