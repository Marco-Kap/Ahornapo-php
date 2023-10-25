<?php include "meta.php" ?>
<meta name="desription" content="Hier finden Sie die aktuelle Notdienst Apotheke im Raum Korbach und den Notdienstplan.">
  <title>Notdienstsuche</title>
</head>
<?php include "header.php"?>
  <body>
    <main>
    <div class="spacer coll960"></div>


  <a href="https://www.aponet.de/apotheke/notdienstsuche/34497/%20/5" >
    <h2 id="emergencyContainer" class="card calendar-heading px-4">
      <!-- Aktuelle Notdienst Apotheke: <p class="currentPharmacy" id="emName">Ahorn-Apotheke<p id="emStreet">Bahnhof Straße 7,</p><p id="emLocation">34497 Korbach</p> -->
  </h2>
  </a>


  <div id="calendar">
      <div class="month">
        <ul>
          <li id="prev">&#10094;</li>
          <li id="month"></li>
          <li id="year"></li>
          <li id="next">&#10095;</li>
        </ul>
      </div>

      <ul id="weekdays">
        <li>Mo</li>
        <li>Di</li>
        <li>Mi</li>
        <li>Do</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>So</li>
      </ul>

      <ul  id="days"></ul>
<p class="text-center container">Klicken Sie ein Datum an um die zuständige Notdienst Apotheke ausfindig zu machen</p>
      <div class=" collapse text-center card" id="nextEmContainer">
        <h5 class="card-header">Notdienst am:</h5>
        <p id="select"></p>
        <p>hat die</p>
        <h4 class="" id="nextEmergency"></h4>
      </div>
      <div class="text-center container"><p>Die in diesem Kalender angebenen Daten basieren auf der regulären Rotation der Apotheken in 2023. In 2024 ändert sich die reguläre Rotation der Notdienstapotheken und wird durch eine technische Lösung ersetzt. Wir tun unser Bestes um Sie jederzeit über den aktuellen Notdienst zu informieren. Wir können allerdings keine Gewährleistung für die Korrektheit der zukünftigen Notdienste übernehmen.</p></div>
    <div class="card mb-2"><h6 class="card-header text-center"><a href="tel:+49613119240">Giftnotruf</a></h6>
      <p class="card-body text-center">Sollten Sie mit Giftstoffen in Kontakt gekommen sein, wählen Sie bitte die Nummer der <a href="tel:+49613119240">Giftnotrufzentrale Hessen 06131-19240</a></p><div>
    </div>
  </div>
  <div class="spacer" aria-hidden="true"/>
</main>

<script src="/js/bootstrap.js"></script>
<script src="/js/calendar.js"></script>
</body>

<?php include "footer.php" ?>
    
</html>
