const wrapper = document.querySelector(".wrapper"),
  // getting user's input
  qrInputName = wrapper.querySelector(".form .name"),
  // getting user's mobile
  qrInputNumber = wrapper.querySelector(".form .number"),
  // getting user's members
  qrInputMembers = wrapper.querySelector(".form .members"),
  // button to handle it's html
  generateBtn = wrapper.querySelector(".form .generateButton"),
  // getting image tag to add QR image later on
  qrImg = wrapper.querySelector(".qr-code img");

// this will store the input data to create QR again in case of any faillure
let preValue;

// function to create QR
const createQR = () => {
  // this is getting used to create the QR - we will do something with time and mobile number
  let qrValue =
    "Name: " +
    qrInputName.value.trim() +
    "\nMobile: " +
    qrInputNumber.value.trim() +
    "\nMembers: " +
    qrInputMembers.value.trim() +
    "\nDate of Registration: " +
    new Date();
  console.log(qrValue);

  // checking if value has been changed or not
  // if it is not changed then it will not create the qr again
  if (!qrValue || preValue === qrValue) return;

  // setting previous value equals to the current input
  preValue = qrValue;

  // handling button text
  generateBtn.innerText = "Generating Your Pass...";

  // calling the API to create the QR based on the input value - we will use mobile and date to create
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  //
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Get My Pass";
  });

  // getting elements of the pass
  const passImg = document.querySelector(".pass .qrInPass");
  const passName = document.querySelector(".pass .nameInPass");
  const passMobile = document.querySelector(".pass .mobileInPass");
  const passMembers = document.querySelector(".pass .membersInPass");

  // adding information in the pass
  passImg.src = qrImg.src;
  passName.innerHTML = qrInputName.value;
  passMobile.innerHTML = qrInputNumber.value;
  passMembers.innerHTML = qrInputMembers.value;
};

// getting name input
qrInputName.addEventListener("keyup", () => {
  // it will remove QR if input box is empty
  if (!qrInputName.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});

// handling mobile input
qrInputNumber.addEventListener("keyup", () => {
  // it will remove QR if input box is empty
  if (!qrInputNumber.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});

// handling mobile input
qrInputMembers.addEventListener("keyup", () => {
  // it will remove QR if input box is empty
  if (!qrInputMembers.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
