<?php
// URL of the XML document
$xmlUrl = 'https://lakhs.notdienst-portal.de/lakhsportal/xmlschnittstelle/standort/ergebnis?emergencyCount=2&lat=51.2770468&lon=8.8723922&dayCount=14&key=1699258972907_-1255414065';

// Fetch the XML data from the URL
$xmlData = file_get_contents($xmlUrl);

// Load the XML data into a SimpleXML object
$xml = simplexml_load_string($xmlData);

// Convert the SimpleXML object to an array
$xmlArray = json_decode(json_encode($xml), true);

// Now, $xmlArray contains the XML data in array format
$entry = $xmlArray["entries"]["entry"];

?>
