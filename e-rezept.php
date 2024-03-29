<?php include "meta.php" ?>
<meta name="desription" content="Bei uns können Sie bereits jetzt das E-Rezept einlösen. Wir bearbeiten und liefern Ihre Medikation. Wir stellen für Sie Informationen rund um das E-Rezept zur Verfügung.">
  <title>E-Rezept</title>
</head>
<?php include "header.php"?>
<body>
    <div aria-disabled="true" class="container">
        <div><img alt="Banner E-Rezepte App" style="color:transparent;width:100%;height:auto;z-index:1" sizes="100vw"
                src="/img/E-rezept-Handy-min-cut.jpg">
            <div class="coll1">
                <div style="color:white">
                    <h2 style="opacity:1;font-size:3.6vw;padding-left:0.3em"></h2>
                </div>
            </div>
        </div>
    </div><img  id="test" src=""/>
        <div aria-hidden="true" class="spacer"></div>
    <div class="card text-center container p-4">
        <p>Sie können bereits jetzt bei uns ein E-Rezept mit Ihrer elektronischen Gesundheitskarte, einem Papierausdruck mit QR-Code oder der E-Rezept App 
            einlösen.</p>
        <p>Kommen Sie mit Ihrer Gesundheitskarte oder einem QR Code bei uns vorbei.</p>
        <p>Ab dem 01.01.2024 sollen Arztpraxen bevorzugt E-Rezepte ausstellen. Als bei uns registrierter Kunde haben Sie allerdings eine
            weitere Möglichkeit. Bitten Sie Ihren Arzt uns in Ihrem Namen ein Rezept zu übermitteln. Wir
            bearbeiten Ihr E-Rezept und bereiten Ihre Bestellung für Sie vor.</p>
            <b><p>Außerdem haben Sie die Möglichkeit Ihr Rezept zu fotografieren oder zu scannen und direkt bei uns hochzuladen</p></b>

            <div class="card">
        <form class="px-4 m-2" method="post" enctype="multipart/form-data" name="form" action="">
            <div class="row">
            <label class="col align-self-center py-2 rounded" style="background-color:#dd3545" for="prescription">Rezepte hochladen</label>
            <input type="file" id="prescription" name="prescription" accept=".jpg, .jpeg, .png" multiple>
            </div>
            <div class="preview" style="max-width: 20vw">
    </div>

<div id="name" class="input-group my-4">
  <input type="text" aria-label="Vorname" class="form-control" name="first-name" placeholder="Vorname" id="first-name">
  <input type="text" aria-label="Nachname" class="form-control" name="last-name" placeholder="Nachname" id="last-name">
</div>
<div class="mt-4" aria-hidden></div>
<div id="adress" class="input-group">
  <input type="text" aria-label="Straße und Hausnummer" class="form-control hidden" name="street" placeholder="Straße und Hausnummer" id="street">
  <input type="text" aria-label="Lieferort" class="form-control hidden" name="place" placeholder="Ort" id="place">
</div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="delivery">
  <label class="form-check-label" for="delivery">
    Ich möchte meine Bestellung liefern lassen
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="privacy" required>
  <label class=" align-self-start" for="privacy">
    Ich habe die Datenschutzerlärung gelesen
  </label>
</div>
    <div>
      <button id="submit-button" class="btn mt-2" style="background-color:#dd3545">Absenden</button>
    </div>
        </form>
        </div>
    </div>
    <div aria-hidden="true" class="spacer"></div>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/erezept.js"></script>

    </body>
    <?php include "footer.php" ?>
</html>