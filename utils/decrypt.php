<?php
// Retrieve encrypted form data and encryption key
$encryptedData = base64_decode($_POST['encrypted-data']);
$encryptionKey = base64_decode($_POST['encryption-key']);

// Decrypt the form data using AES-GCM
$decryptedData = openssl_decrypt(
    $encryptedData,
    'aes-256-gcm',
    $encryptionKey,
    OPENSSL_RAW_DATA,
    "", // IV is generated automatically in AES-GCM
    $_POST['tag']
);

// Parse decrypted data
parse_str($decryptedData, $formData);

// Handle form data as before
$firstName = isset($formData['first-name']) ? htmlspecialchars(trim($formData['first-name'])) : '';
$lastName = isset($formData['last-name']) ? htmlspecialchars(trim($formData['last-name'])) : '';
// Handle other form fields similarly

// Proceed with further processing...
?>