function displayDateTime() {
    const currentDate = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dateTimeString = currentDate.toLocaleDateString(undefined, options);
    
    // Display the date and time in an element with the id "datetime"
    document.getElementById("timer").textContent = dateTimeString;
  }

  setInterval(displayDateTime, 1000);
  displayDateTime();
