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
    </div>
        <div aria-hidden="true" class="spacer"></div>
    <div class="card text-center container p-4">
        <p>Sie können bereits jetzt bei uns ein E-Rezept mit Ihrer elektronischen Gesundheitskarte, einem Papierausdruck mit QR-Code oder der E-Rezept App 
            einlösen.</p>
        <p>Kommen Sie mit Ihrer Gesundheitskarte oder einem QR Code bei uns vorbei.</p>
        <p>Ab dem 01.01.2024 sollen Arztpraxen bevorzugt E-Rezepte ausstellen. Als bei uns registrierter Kunde haben Sie allerdings eine
            weitere Möglichkeit. Bitten Sie Ihren Arzt uns in Ihrem Namen ein Rezept zu übermitteln. Wir
            bearbeiten Ihr E-Rezept und bereiten Ihre Bestellung für Sie vor.</p>
            <p>Außerdem haben sie die Möglichkeit ihr Rezept zu fotografieren oder zu scannen und direkt bei uns hochladen</p>

            <div class="card">
        <form>
            <div>
            <label for="image_upload">Rezepte hochladen</label>
            <input id="upload" type="file" id="image_upload" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
            </div>
            <div class="preview">
    </div>
<div>
    <div>
<input class="form-check-input" type="checkbox" value="" id="privacy">
  <label class="form-check-label" for="flexCheckDefault">
    Ich habe die Datenschutzerklärung gelesen
  </label>
</div>
  <div class="align-self-start justify-self-start">
  <input class="form-check-input" type="checkbox" value="" id="delivery">
  <label class="form-check-label" for="flexCheckDefault">
    Botendienst gewünscht
  </label>
</div>
</div>
<div id="name">
    <input id="firstname" placeholder="vorname" class="input"/>    
    <input id="lastname" placeholder="nachname" class="input"/>
</div>
<div id="adress">
    <input id="street" placeholder="Straße" class="input"/>    
    <input id="place" placeholder="Ort" class="input"/>
</div>
</div> 
    <div>
      <button id="submit-button" class="btn" style="background-color:#dd3545">Absenden</button>
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