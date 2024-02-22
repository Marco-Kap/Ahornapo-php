<?php
// Sanitize form inputs
$firstName = isset($_POST['first-name']) ? htmlspecialchars(trim($_POST['first-name'])) : '';
$lastName = isset($_POST['last-name']) ? htmlspecialchars(trim($_POST['last-name'])) : '';
$place = isset($_POST['place']) ? htmlspecialchars(trim($_POST['place'])) : '';
$street = isset($_POST['street']) ? htmlspecialchars(trim($_POST['street'])) : '';


//$to = "maka@ahornapo.de"; // Change this to email@ahornapo.de
//$subject = "E-rezept Bestellung";

$place != '' ? $message .= "Strasse: $street\n" : '';
$street != '' ? $message .= "Ort: $place\n" : '';
// Add uploaded images as attachments if files were uploaded


// recipient email address
$to = "maka@ahornapo.de";
// subject of the email
$subject = "e-rezept Bestellung";
// from
$from = "maka@ahornapo.de";

// boundary
$boundary = uniqid();


// header information
$headers = "From: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\".$boundary.\"\r\n";

// attachment
$file = $_FILES["prescription"]["tmp_name"];
$filename = $_FILES["prescription"]["name"];
$attachment = chunk_split(base64_encode(file_get_contents($file)));

// message with attachment
$message = "Vorname: $firstName\n";
$message .= "Name: $lastName\n";

$message = "--".$boundary."\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n\r\n";
$message .= chunk_split(base64_encode($message));
$message .= "--".$boundary."\r\n";
$message .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n";
$message .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
$message .= $attachment."\r\n";
$message .= "--".$boundary."--";
    
    if (mail($to, $subject, $message, $headers)) {
        // echo "Email sent successfully.";
       // header('Location: /e-rezept');
       var_dump()
     } else {
         header('Location: /404');
     }
 

?>
