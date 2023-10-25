  const flag = document.getElementById("flag");
  
  document.addEventListener("scroll", (e) => {
    let scrollposition = window.scrollY;
  
    if (scrollposition >= 2) {
      flag.classList.add("slide-out");
      flag.classList.remove("slide-in");
    } else {
      flag.classList.add("slide-in");
      flag.classList.remove("slide-out");
    }
  });
  
  const d = new Date();
  //set a static start Date
  const startDate = new Date("2023-05-01T08:00:00");
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  

  const index = (Math.ceil((d - startDate) / (1000 * 60 * 60 * 24)) % 8) - 1;

   function calculateEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }
  
  function isGermanHoliday(date) {
    //static holidays in hessen, not many
    const germanHolidays = {
      "01-01": "New Year's Day",
      "05-01": "Labour Day",
      "10-03": "Day of German Unity",
      "12-25": "Christmas Day",
      "12-26": "Second Christmas Day",
    };
  
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const easterSunday = calculateEaster(year);
    // Dynamic holidays
    // easter Friday
    const easterFriday = new Date(easterSunday);
    easterFriday.setDate(easterSunday.getDate - 2);
    //pentecost is 49 days after eastern
    const pentecost = new Date(easterSunday);
    pentecost.setDate(easterSunday.getDate() + 49);
    //Ascension of Christ is 39 days after eastern
    const ascension = new Date(easterSunday);
    ascension.setDate(d.getDate() + 39);
    const easterMonth = easterSunday.getMonth();
    const easterDay = easterSunday.getDate();
  
    if (month === easterMonth && day === easterDay) {
      return "Easter Sunday";
    }
    if (month === easterMonth && day === easterDay + 1) {
      return "Easter Monday";
    }
    const formattedDate = `${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return germanHolidays[formattedDate] || false;
  }
  function getNextWeekday(date, dayOfWeek) {
    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));
    return resultDate;
  }
  const nextDay = new Date(d);
  nextDay.setDate(d.getDate() + 1);
  
  const nextMonday = getNextWeekday(d, 1);
  const isHoliday = isGermanHoliday(d);
  const isTomorrowHoliday = isGermanHoliday(nextDay);
  const isMondayHoliday = isGermanHoliday(nextMonday);
  const emergencyContainer = document.getElementById("emergencyContainer")

  entry.forEach(element => {

    if (new Date(element.from.slice(0,19)) < d &&  d < new Date(element.to.slice(0,19)) ) {

   let emName = document.createElement("p")
   let emStreet = document.createElement("p")
   let emLocation = document.createElement("p")

   emLocation.textContent = element.zipCode + ", " + element.location; 
   emName.textContent = element.name;
   emStreet.textContent = element.street;

   emergencyContainer.appendChild(emName)
   emergencyContainer.appendChild(emStreet)
   emergencyContainer.appendChild(emLocation)
  } 
    
  });
  const showEmergency = () => {
    realDate = new Date(2023-11-17)
  //  index not neccessary anymore
  entry.forEach(element => {
    
    if (element.from > realDate && element.to > realDate && element.name === "Ahorn Apotheke") {
      
  return true
    } 
  });
  return false
   // document.getElementById("emergency").textContent = pharmacies[index];
    //document.getElementById("emergency").textContent = currentPharmacy;
  }


  function isOpen() {
    let closingTime;
  let isEmergency = showEmergency()
    if (
      isHoliday !== true &&
      isEmergency !== true &&
      day !== 6 &&
      (hour <= 8 || (hour >= 18 && minute >= 30) || day === 0)
    ) {
      closingTime = "öffnet um 8:00";
    } else if (
      isEmergency !== true &&
      day !== 6 &&
      day !== 0 &&
      (hour >= 8 || (hour <= 18 && minute <= 30))
    ) {
      closingTime = "geöffnet bis 18:30";
    } else if (
      (isHoliday !== true && isEmergency !== true && day === 6 && hour <= 8) ||
      (hour <= 13 && minute <= 30)
    ) {
      closingTime = "geöffnet bis 13:30";
    } else if (
      isEmergency !== true &&
      ((day === 6 && closingTime !== "geöffnet bis 13:30") || day === 0)
    ) {
      closingTime = "öffnet Montag um 8:00";
    } else if (isEmergency !== true && isHoliday === true) {
      closingTime = "geschlossen";
    } else if (isEmergency === true) {
      closingTime = "aktuell geöffnet!";
    } else {
      closingTime = "";
    }
    return closingTime;
  }
  document.getElementById("isOpen").textContent = isOpen();
  document.getElementById("isOpen2").textContent = isOpen();
  document.getElementById("isOpen3").textContent = isOpen();
// set variables
let today = new Date();
let dayInt = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
// body of the calendar
let calendarBody = document.getElementById("days");
let actuallMonth =
Number(month) + 1 < 10
  ? "0" + (Number(month) + 1).toString()
  : (Number(month) + 1).toString();

let formatetHour; 
hour <= 9 ? formatetHour = "0" + hour : formatetHour = hour
let formatetDate = (year + "-" + actuallMonth + "-" + dayInt + "T" + formatetHour + ":" + minute  + ":00+1:00")
entry.forEach(element => {
  /*if (element.from < formatetDate && element.to < formatetDate) {
    document.getElementById("emName").textContent = element.name
    document.getElementById("emStreet").textContent = element.street + " "
    document.getElementById("emLocation").textContent = element.zipCode + ", " + element.location
  }*/
});/*
console.log(year + "-" + actuallMonth + "-" + dayInt + "T" + formatetHour + ":" + minute  + ":00+1:00" + "   ganzes datunm")
console.log(entry[0].name + "name")

let fromdate = year + "-" + actuallMonth + "-" + dayInt + "T" + formatetHour + ":" + minute  + ":00"
console.log(new Date(fromdate) < d ? true : false)
console.log("--------------------------------------------")
*/


let months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

// Pharmacies
const pharmacies = [
  "Ahorn Apotheke,Bahnhofstr. 7, 34497 Korbach, 05631 40 40",
  "Apotheke Am Berndorfer Tor, Am Berndorfer Tor 5, 34497 Korbach, 05631 2088",
  "Bären-Apotheke,Solinger Str. 28, 34497 Korbach, 05631 7370",
  "Eisenberg-Apotheke,Flechtdorfer Str. 3A, 34497 Korbach,05631 4021",
  "Adler Apotheke Sachsenhausen,Wildunger Str. 9, 34513 Waldeck-Sachsenhausen,05634 309",
  "Hirsch-Apotheke,Prof.-Kümmel-Str. 2, 34497 Korbach, 05631 2545",
  "Edersee-Apotheke Vöhl, Schloßstr. 2, 34516 Vöhl, 05635 214",
  "Edersee-Apotheke Vöhl, Schloßstr. 2, 34516 Vöhl, 05635 214",
];
// next and previous functionality
let nextbtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextbtn.onclick = function () {
  next();
};
prevBtn.onclick = function () {
  previous();
};

// init calendar
showCalendar(month, year);
showEmergency();

const nextEmContainer = document.getElementById("nextEmContainer")

function showDate(e) {
  let showYear = e.getAttribute("data-year");
  let showMonth = e.getAttribute("data-month");
  let showDay = e.getAttribute("data-day");

let showNextDay = (Number(showDay) + 1).toString()

  let nextStartDate = showYear + "-" + actuallMonth + "-" + showNextDay;



  document.getElementById("nextEmContainer").classList.remove("collapse")
  document.getElementById("select").innerHTML =
    showDay + ". " + months[showMonth] + " " + showYear;

    entry.forEach(element => {

      if (new Date(element.from.slice(0,19)) < d &&  d < new Date(element.to.slice(0,19)) ) {
  let emName = document.createElement("p")
  let emStreet = document.createElement("p")
  let emLocation = document.createElement("p")

  emLocation.textContent = element.zipCode + ", " + element.location; 
  emName.textContent = element.name;
  emStreet.textContent = element.street;

  nextEmContainer.appendChild(emName)
  nextEmContainer.appendChild(emStreet)
  nextEmContainer.appendChild(emLocation)
      }
    });
}

// Function to handle the click event
function handleClick(e) {
  // Remove the CSS class from the previously clicked element (if any)
  const previouslyClicked = document.querySelector(".marked");
  if (previouslyClicked) {
    previouslyClicked.classList.remove("marked");
  }
  e.target.classList.add("marked");
}

function showCalendar(month, year) {
  // gets the day of the week for this date
  let firstDay = new Date(year, month).getDay();
  // clearing all previous cells
  calendarBody.innerHTML = "";
  // checking the mount of days in this month to control the loop
  let totalDays = daysInMonth(month, year);

  // adding the blank boxes so that date start on correct day of the week
  // substracting 1 to set monday as the first weekday
  // and testing for sunday because it became the 7th day
  blankDates(firstDay === 0 ? 6 : firstDay - 1);
  // adding the dates to the calendar
  for (let day = 1; day <= totalDays; day++) {
    // create li node with text content & apend to body
    let cell = document.createElement("li");
    let cellText = document.createTextNode(day);
    // adding active class if day matches today
    if (
      dayInt === day &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("active");
    }

    // appending date attributes to single date li element
    cell.setAttribute("data-day", day);
    cell.setAttribute("data-month", month);
    cell.setAttribute("data-year", year);
    cell.setAttribute("id", day);

    //appending li to body of calendar
    cell.classList.add("singleDay");
    cell.appendChild(cellText);
    cell.onclick = function (e) {
      showDate(e.target);
      handleClick(e);
     // showNextEm(e.target);
    };
    calendarBody.appendChild(cell);
  }

  // set month string value
  document.getElementById("month").innerHTML = months[month] ;
  // set year string value
  document.getElementById("year").innerHTML = year;
}

function daysInMonth(month, year) {
  // day 0 here returns the last day of the PREVIOUS month
  return new Date(year, month + 1, 0).getDate();
}

function blankDates(count) {
  // looping to add the correct amount of blank days to the calendar
  for (let x = 0; x < count; x++) {
    let cell = document.createElement("li");
    let cellText = document.createTextNode("");
    cell.appendChild(cellText);
    // add the empty class to remove the borders
    cell.classList.add("empty");
    calendarBody.appendChild(cell);
  }
}

function next() {
  year = month === 11 ? year + 1 : year;
  month = (month + 1) % 12;
  showCalendar(month, year);
}

function previous() {
  year = month === 0 ? year - 1 : year;
  month = month === 0 ? 11 : month - 1;
  showCalendar(month, year);
}

// function select(d, m, y) {
// 	document.getElementById("select").innerHTML = new Date(y, m, d);
// }
