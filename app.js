function updateClock() {
    //Get the current time.
    const now = new Date()

    //Format the time into a string
    const timeString = now.toLocaleString()

    //Get the text of the cock display.
    document.getElementById('clock-time').innerHTML = timeString
}

//Get the interval for the clock
setInterval(updateClock, 1000)