// function onScroll(e) {
//     let scrollValue = e.target.documentElement.scrollTop;
//     window.addEventListener("scroll", onScroll);
  
//     let scrollButton = getElementById("scrollButton");
//     if (scrollValue <= 6) {
//       scrollButton.calllist.add("coll");
//     }
//     window.removeEventListener("scroll", onScroll);
//   }
  
//   const scrollButton = document.getElementById("scrollButton");
//   const flag = document.getElementById("flag");
  
//   document.addEventListener("scroll", (e) => {
//     let scrollposition = window.scrollY;
  
//     if (scrollposition >= 2) {
//       flag.classList.add("slide-out");
//       flag.classList.remove("slide-in");
//     } else {
//       flag.classList.add("slide-in");
//       flag.classList.remove("slide-out");
//     }
//   });
  /*
  // Get the current date
  const d = new Date();
  //set a static start Date
  const startDate = new Date("2023-05-01T08:00:00");
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
//let currentPharmacy = "Ahorn Apotheke Bahnhofstraße 7, 34497 Korbach" //to test emergency logic
 // const currentPharmacy = entry[0].name + " " + entry[0].street + ", " + entry[0].zipCode + " " + entry[0].location;
  const index = (Math.ceil((d - startDate) / (1000 * 60 * 60 * 24)) % 8) - 1;*/
  
  //-- Logic to calculate Holidays -------------------------------------------------
  
  // get eater date with gauss algorythm
  /*function calculateEaster(year) {
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
  
  function isOpen() {
    let closingTime;
  
    if (
      isHoliday !== true &&
      index !== 0 &&
      day !== 6 &&
      (hour <= 8 || (hour >= 18 && minute >= 30) || day === 0)
    ) {
      closingTime = "öffnet um 8:00";
    } else if (
      index !== 0 &&
      day !== 6 &&
      day !== 0 &&
      (hour >= 8 || (hour <= 18 && minute <= 30))
    ) {
      closingTime = "geöffnet bis 18:30";
    } else if (
      (isHoliday !== true && index !== 0 && day === 6 && hour <= 8) ||
      (hour <= 13 && minute <= 30)
    ) {
      closingTime = "geöffnet bis 13:30";
    } else if (
      index !== 0 &&
      ((day === 6 && closingTime !== "geöffnet bis 13:30") || day === 0)
    ) {
      closingTime = "öffnet Montag um 8:00";
    } else if (index !== 0 && isHoliday === true) {
      closingTime = "geschlossen";
    } else if (index === 0) {
      closingTime = "aktuell geöffnet!";
    } else {
      closingTime = "";
    }
    return closingTime;
  }
  
  document.getElementById("isOpen").textContent = isOpen();
  document.getElementById("isOpen2").textContent = isOpen();
  document.getElementById("isOpen3").textContent = isOpen();
  */
  /*
  //--- show overlay when hover over icons ------
  const iconContainer = document.querySelector(".icon-container");
  
  iconContainer.addEventListener("mouseenter", () => {
    iconContainer.classList.add("hovered");
  });
  
  iconContainer.addEventListener("mouseleave", () => {
    iconContainer.classList.remove("hovered");
  });
  /*
  //---------------- Calendar ------------------------//
  // set variables
  let today = new Date();
  let dayInt = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  // body of the calendar
  let calendarBody = document.getElementById("days");
  
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
  
  // next and previous functionality
  let nextbtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextbtn.onclick = function () {
    next();
  };
  prevBtn.onclick = function () {
    previous();
  };
  
  // on select of date
  // let selectDay = document.getElementsByClassName("singleDay");
  
  // init calendar
  showCalendar(month, year);
  
  function showDate(e) {
    let showYear = e.getAttribute("data-year");
    let showMonth = e.getAttribute("data-month");
    let showDay = e.getAttribute("data-day");
    document.getElementById("select").innerHTML =
      showDay + " " + months[showMonth] + " " + showYear;
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
  
      //appending li to body of calendar
      cell.classList.add("singleDay");
      cell.appendChild(cellText);
      cell.onclick = function (e) {
        showDate(e.target);
      };
      calendarBody.appendChild(cell);
    }
  
    // set month string value
    document.getElementById("month").innerHTML = months[month];
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
  
  
  
  /*
  //----------    Router   --------------------------------------//
  // create document click that watches the nav links only
  document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
      return;
    }
    e.preventDefault();
    route();
  });
  
  //Static Routes
  const routes = {
    "/": {
      template: "/ahornapo/pages/startseite.html",
      title: "Startseite",
      description: "Startseite der Ahornapotheke Korbach",
    },
    "/ueber-uns": {
      template: "/ahornapo//pages/ueber-uns.html",
      title: "&#220ber Uns",
      description: "Beschreibung der Ahorn Apotheke",
    },
    "/kontakt": {
      template: "/ahornapo/pages/kontakt.html",
      title: "Kontakt",
      description: "Kontaktdaten",
    },
    "/impressum": {
      template: "/ahornapo/pages/impressum.html",
      title: "Impressum",
      description: "Impressum",
    },
    "/datenschutz": {
      template: "/ahornapo/pages/datenschutz.html",
      title: "Datenschutzerkl&aumlrung",
      description: "Datenschutzerkl&aumlrung",
    },
    "/verlosung": {
      template: "/ahornapo/pages/verlosung.html",
      title: "Verlosung",
      description: "Saisonale Verlosung",
    },
    "/gesundheitstipps": {
      template: "/ahornapo/pages/stellenangebote.html",
      title: "Gesundheitstipps",
      description: "Gesundheitstipps, Wellness, gesunde Ernährung",
    },
    "/ahornapo/": {
      template: "/ahornapo/pages/startseite.html",
      title: "Gesundheitstipps",
      description:
        "Ahornapotheke Korbach Gesundheitstipps, Wellness, gesunde Ernährung",
    },
    "/stellenangebote": {
      template: "/ahornapo/pages/stellenangebote.html",
      title: "Stellenangebote",
      description: "Stellenangebote",
    },
    404: {
      template: "/ahornapo/pages/404.html",
      title: "404",
      description: "Die Seite ist nicht erreichbar",
    },
  };
  
  const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
    //scroll to top of the page on load
    window.scrollTo(0, 0);
  };
  
  const locationHandler = async () => {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
      location = "/";
    }
  
    // get the route object from the urlRoutes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
  
    // set the description of the document to the description of the route
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
  };
  
  // add an event listener to the window that watches for url changes
  window.onpopstate = locationHandler;
  // call the urlLocationHandler function to handle the initial url
  window.route = route;
  // call the urlLocationHandler function to handle the initial url
  locationHandler();
  */
  