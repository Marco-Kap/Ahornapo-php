const input = document.getElementById("upload");
const preview = document.querySelector(".preview");
const submitBtn = document.getElementById("submit-button")
const privacy = document.getElementById("privacy");
const delivery = document.getElementById("delivery");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const street = document.getElementById("street");
const place = document.getElementById("place");

privacy === "true" && ((name.value !== "" && lastname.value !== "") && ((delivery === true && adress.value !== "" && adress.value !== "") || delivery === false)) ? submitBtn.style.opacity = 100 : submitBtn.style.opacity = 0;
input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    // while (preview.firstChild) {
    //     console.log("hallo")
    //   preview.removeChild(preview.firstChild);
    // }
    console.log("hallo" + input.files)
    const curFiles = input.files;
    if (curFiles === 0) {
        console.log("curl.lengt ist kleiner 0")
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    } else {
        console.log(" ist undefined")
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
  