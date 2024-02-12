// Encrypts the form data using AES encryption
async function encryptFormData() {
  const form = document.getElementById("myForm");
  const formData = new FormData(form);
  const serializedFormData = new URLSearchParams(formData).toString();

  // Generate a random encryption key
  const encryptionKey = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt"]
  );

  // Convert the form data to Uint8Array
  const data = new TextEncoder().encode(serializedFormData);

  // Encrypt the data using AES-GCM
  const encryptedData = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: crypto.getRandomValues(new Uint8Array(12)) },
    encryptionKey,
    data
  );

  return { encryptedData, encryptionKey };
}

// Handle form submission
document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Encrypt the form data
  const { encryptedData, encryptionKey } = await encryptFormData();

  // Convert ArrayBuffer to base64 string for transmission
  const encryptedDataString = btoa(
    String.fromCharCode.apply(null, new Uint8Array(encryptedData))
  );

  // Set hidden input fields for encrypted data and key
  const encryptedInput = document.createElement("input");
  encryptedInput.type = "hidden";
  encryptedInput.name = "encrypted-data";
  encryptedInput.value = encryptedDataString;
  form.appendChild(encryptedInput);

  const keyInput = document.createElement("input");
  keyInput.type = "hidden";
  keyInput.name = "encryption-key";
  keyInput.value = btoa(
    String.fromCharCode.apply(
      null,
      new Uint8Array(await window.crypto.subtle.exportKey("raw", encryptionKey))
    )
  );
  form.appendChild(keyInput);

  // Submit the form
  form.submit();
});
