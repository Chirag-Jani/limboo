// this function will display file

function loadFile(event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}

function create() {
  // gets first name
  let fname = document.getElementById("fname").value;
  // gets last name
  let lname = document.getElementById("lname").value;
  // gets batch
  var boption = document.getElementById("batch");
  var bvalue = boption.options[boption.selectedIndex].text;

  console.log("First Name: ", fname);
  console.log("Last Name: ", lname);
  console.log("Batch: ", bvalue);
}

//   function to download the file - call this one on click of the button
// function download(fileUrl, fileName) {
//   var a = document.createElement("a");
//   a.href = fileUrl;
//   a.setAttribute("download", fileName);
//   a.click();
// }
