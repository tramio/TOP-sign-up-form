const passwordConfirmationInput = document.getElementById("password-confirmation-input");
const passwordInput = document.getElementById("password-input")
const myFields = [passwordInput, passwordConfirmationInput];
const passwordConfirmationMessage = document.getElementById("password-confirmation-error");
const passwordLengthMessage = document.getElementById("password-length-error");

function verifyPasswords() {
  if (!isEmpty(passwordConfirmationInput) && passwordAndConfirmationMatch()) {
    myFields.map(element => element.classList.add("error"));
    passwordConfirmationMessage.textContent = "Your password and confirmation must match";
  } else {
    myFields.map(element => element.classList.remove("error"));
    passwordConfirmationMessage.textContent = "";
  }
}
function passwordAndConfirmationMatch() {
  return passwordInput.value !== passwordConfirmationInput.value;
}
function isEmpty(inputElement) {
  return inputElement.value === "";
}
function passwordHasCorrectLength() {
  return passwordInput.value.length >= 8 && passwordInput.value.length <= 20;
}
function setPasswordLengthMessage() {
  if (!isEmpty(passwordInput) && !passwordHasCorrectLength()) {
    passwordLengthMessage.textContent = "Your password should contain 8 to 20 characters";
  } else {
    passwordLengthMessage.textContent = "";
  }
}

myFields.map(element => {element.addEventListener("keyup", () => {
  verifyPasswords();
  setPasswordLengthMessage();
})});
