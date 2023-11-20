<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
<?php include "meta.php" ?>

<meta name="desription" content="Bitte nehmen sie jederzeit Kontakt zu uns auf">
  <title>Kontakt zur Ahorn-Apotheke</title>
</head>
<?php include "header.php"?>
<body>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin="">
</script>

     <main class="container">
    <div class=" card" style="margin-top: 2em">
        <div class="card-header text-center"><b>Wir freuen uns darauf, von Ihnen zu hören!</b></div>
        <div class="distance mycard card">Kontaktieren Sie uns! Bei Fragen,
            Anliegen
            oder Feedback stehen wir Ihnen jederzeit zur Verfügung. Hier finden Sie verschiedene Möglichkeiten, um mit
            uns
            in Kontakt zu treten: Besuchen Sie uns vor Ort, rufen Sie uns an oder schicken Sie uns eine E-Mail.</div>
        <div  class="card distance">
            <h3 class="card-header">Öffnungszeiten</h3>
            <div class="px-2">
            <div class="d-flex">
                <div>Montag</div>
                <div class="ms-auto">08:00 - 18:30</div>
            </div>
            <div class="d-flex mt-2">
                <div>Dienstag</div>
                <div class="ms-auto">08:00 - 18:30</div>
            </div>
            <div class="d-flex mt-2">
                <div>Mittwoch</div>
                <div class="ms-auto">08:00 - 18:30</div>
            </div>
            <div class="d-flex mt-2">
                <div>Donnerstag</div>
                <div class="ms-auto">08:00 - 18:30</div>
            </div>
            <div class="d-flex mt-2">
                <div>Freitag</div>
                <div class="ms-auto">08:00 - 18:30</div>
            </div>
            <div class="d-flex mt-2">
                <div>Samstag</div>
                <div class="ms-auto">08:00 - 13:30</div>
            </div>
        </div>
        </div>
        <div class="distance card mt-4"><div class="card-header "><span >Bahnhofstraße 7</span><br>
          <span>34497 Korbach</span></div><br>
          <span class="nowrap">  <a href="tel:056314040"><span>Tel:</span> <span>05631 4040</span></a></span><br>
          <span class="nowrap">  <a href="tel:05631404044">Fax: 05631 404044</a></span><br>
          <span><a href="mailto:email@ahornapo.de">email@ahornapo.de</a></span><br>
         </div>
         <div class="card distance mt-4 p-2">
            <span>Unsere KIM Adresse lautet:</span>
            <span>ahornapo@noventi.kim.telematik</span>
        </div>
        <div class="mycard distance card">Ihre Gesundheit liegt uns am Herzen
            und
            wir sind gerne für Sie da. Zögern Sie nicht, uns zu kontaktieren!
        </div>
    </div>

    <div id="map"></div>
         
<script>
var map = L.map('map').setView([51.2768456, 8.8720421], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: './img/ahornapo-haus.png',
    shadowUrl: '',

    iconSize:     [38, 38], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([51.2766256, 8.8720621], {icon: greenIcon}).addTo(map);

</script>
    <!-- <div id="map" style="width: 600px; height: 400px; position: relative;" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0">
    <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px);">
    <div class="leaflet-pane leaflet-tile-pane">
        <div class="leaflet-layer " style="z-index: 1; opacity: 1;">
        <div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1);"><img alt="" src="https://tile.openstreetmap.org/13/4093/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(56px, -91px, 0px); opacity: 1;">
            <img alt="" src="https://tile.openstreetmap.org/13/4094/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(312px, -91px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4093/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(56px, 165px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4094/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(312px, 165px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4092/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-200px, -91px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4095/2723.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(568px, -91px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4092/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-200px, 165px, 0px); opacity: 1;"><img alt="" src="https://tile.openstreetmap.org/13/4095/2724.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(568px, 165px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-overlay-pane"></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-marker-pane"></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1048050px, 697379px, 0px) scale(4096);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in" aria-disabled="false"><span aria-hidden="true">+</span></a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out" aria-disabled="false"><span aria-hidden="true">−</span></a></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com" title="A JavaScript library for interactive maps"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"></path><path fill="#FFD500" d="M0 4h12v3H0z"></path><path fill="#E0BC00" d="M0 7h12v1H0z"></path></svg> Leaflet</a> <span aria-hidden="true">|</span> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a></div></div></div></div> -->
</main>
<script src="/js/bootstrap.js"></script>
<script src="/js/main.js"></script>

</body>

<?php include "footer.php" ?>
    
</html>