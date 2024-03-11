function generateCalendar() {
    const tableBody = document.querySelector("#calendar tbody");
    tableBody.innerHTML = ""; // Clear previous content
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const currentDay = now.getDate();
    const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentYear, now.getMonth(), 1).getDay();

    document.getElementById("currentMonth").textContent = `${currentMonth} ${currentYear}`;

    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                // Empty cells before the first day of the month
                cell.textContent = "";
            } else if (dayCount > daysInMonth) {
                // Empty cells after the last day of the month
                cell.textContent = "";
            } else {
                cell.textContent = dayCount;

                // Highlight today's date
                if (dayCount === currentDay && i === Math.floor((currentDay + firstDay - 1) / 7)) {
                    cell.classList.add("today");
                }
                if (dayCount === 11 || dayCount === 25) {
                    cell.classList.add("SnemDay");
                    if (dayCount < currentDay) {
                        cell.classList.add("missed");
                    }
                }

                dayCount++;
            }

            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

// Initial generation
generateCalendar();

// Automatically update the calendar each second
setInterval(generateCalendar, 1000);
  // JavaScript list (array) of strings
  let stringList = ['Kdyz nevíš, víš vše', 'Ráno moudřejší večera', 'Dobrá rada, polní tráva',
   'Lepší než skočit pod vlak sníst rajčatový protlak', 'Jestli pes neštěká, chce čaj','Nauč se z vlastních chyb, nechceš skončit jako bezďák'
,'Dej muži rybu a nakrmiš ho na den, nauč ho rybařit a nakrmíš ho na zbytek života','Studuj mladíku','Nic není dokonalé, jenom vaše budoucí tchýně',
'Lepší trpaslík v hrsti než gorlock na střeše'];

  function displayRandomString() {
    // Check if a string was already set today
    let storedDate = localStorage.getItem('lastSetDate');
    let currentDate = new Date().toLocaleDateString();

    if (storedDate === currentDate) {
      // If the string was already set today, retrieve it from localStorage
      let storedString = localStorage.getItem('randomString');
      document.getElementById('randomString').textContent = `Dnes je ${currentDate} a dnešním moudrem jest: ${storedString}`;
    } else {
      // If the string hasn't been set today, set a new random string
      let randomIndex = Math.floor(Math.random() * stringList.length);
      let randomString = stringList[randomIndex];

      // Store the random string and the current date in localStorage
      localStorage.setItem('randomString', randomString);
      localStorage.setItem('lastSetDate', currentDate);

      // Display the random string in the HTML
      document.getElementById('randomString').textContent = `Dnes je ${currentDate} a dnešním moudrem jest: ${randomString}`;
    }
  }

  // Call the function when the page loads
  window.onload = displayRandomString;
