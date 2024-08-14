// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");


//Added code is below
function timeupdate() {
    time += 1;
    counterElement.textContent = time;
}

setInterval(timeupdate, 1000);