const flag = document.getElementById("flag");

document.addEventListener("scroll", (e) => {
  let scrollposition = window.scrollY;
  if (flag !== (undefined || null)) {
    if (scrollposition >= 2) {
      flag.classList.add("slide-out");
      flag.classList.remove("slide-in");
    } else {
      flag.classList.add("slide-in");
      flag.classList.remove("slide-out");
    }
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
    day,
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

//return true when ahornapotheke is in emergency mode
const getEmergency = () => {
  //String that can be compared to Date String of XML
  entry.forEach((element) => {
    if (
      new Date(element.from) > d &&
      new Date(element.to) > d &&
      element.name === "Ahorn Apotheke"
    ) {
      return true;
    }
  });
  return false;
};

function isOpen() {
  let closingTime;
  let isEmergency = getEmergency();
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
hour <= 9 ? (formatetHour = "0" + hour) : (formatetHour = hour);
let formatetDate =
  year +
  "-" +
  actuallMonth +
  "-" +
  dayInt +
  "T" +
  formatetHour +
  ":" +
  minute +
  ":00+1:00";

getEmergency();
