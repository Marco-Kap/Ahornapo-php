const input = document.querySelector("input");
const preview = document.querySelector(".preview");
const submitBtn = document.getElementById("submit-button");
const delivery = document.getElementById("delivery");
const privacy = document.getElementById("privacy");
const name = document.getElementById("name");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const adress = document.getElementById("adress");
const street = document.getElementById("street");
const place = document.getElementById("place");
const image = document.getElementById("image_upload");
const test = document.getElementById("test");

submitBtn.disabled = true;
//encoder function for base64
function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}
test.setAttribute(
  "src",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
);
const imageSrc = bytesToBase64(new TextEncoder().encode(input));

//this already returns a base 64
input.addEventListener("input", (e) => {
  const p = document.createElement("img");
  document.body.appendChild(p);
  p.src = "data:image/png;base64, ";
  console.log(e);
  console.log(bytesToBase64(new TextEncoder().encode(image)));
});

//hides streets and places if not checked
delivery.addEventListener("click", (e) => {
  if (e.target.checked === true && street.value === "") {
    street.classList.remove("hidden");
  } else {
    street.classList.add("hidden");
  }
});

delivery.addEventListener("click", (e) => {
  if (e.target.checked === true && place.value === "") {
    place.classList.remove("hidden");
  } else {
    place.classList.add("hidden");
  }
});

//final check if conditions are met
//eventlistners for privacy name and firstName
lastName.addEventListener("keydown", (e) => {
  if (
    privacy.checked === true &&
    e.target.value !== "" &&
    firstName.value !== ""
  ) {
    submitBtn.style.opacity = "100%";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.opacity = "50%";
    submitBtn.disabled = true;
  }
});

firstName.addEventListener("keydown", (e) => {
  if (
    e.target.value !== "" &&
    privacy.checked === true &&
    lastName.value !== ""
  ) {
    submitBtn.style.opacity = "100%";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.opacity = "50%";
    submitBtn.disabled = true;
  }
});

privacy.addEventListener("click", (e) => {
  if (
    e.target.checked === true &&
    firstName.value !== "" &&
    lastName.value !== ""
  ) {
    submitBtn.style.opacity = "100%";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.opacity = "50%";
    submitBtn.disabled = true;
  }
});

//default input field is hidden
input.style.opacity = 0;
//submit button is initially transparent
submitBtn.style.opacity = "50%";

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  // while (preview.firstChild) {
  //     console.log("hallo")
  //   preview.removeChild(preview.firstChild);
  // }

  const curFiles = input.files;
  console.log(bytesToBase64(new TextEncoder().encode(input.files[0])));
  if (curFiles === 0) {
    console.log("curl.lengt ist kleiner 0");
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
  }
}
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];
//Checks whether filetype of input file matches valid filetype
function validFileType(file) {
  return fileTypes.includes(file.type);
}
//returns the filesize with the appropriate unit
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
