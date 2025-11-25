const form = document.getElementById("my-form");
const nameField = document.getElementById("f-name");
const emailField = document.getElementById("f-email");
const passwordField = document.getElementById("f-password");

const errName = document.getElementById("err-name");
const errEmail = document.getElementById("err-email");
const errPassword = document.getElementById("err-password");
const finalMessage = document.getElementById("final-message");

function validateNameField() {
  const v = nameField.value.trim();
  if (!v) {
    errName.textContent = "Name is required.";
    return false;
  }
  errName.textContent = "";
  return true;
}
function validateEmailField() {
  const v = emailField.value.trim();
  if (!v) {
    errEmail.textContent = "Email is required.";
    return false;
  }
  if (!v.includes("@")) {
    errEmail.textContent = "Email must contain @.";
    return false;
  }
  errEmail.textContent = "";
  return true;
}
function validatePasswordField() {
  const v = passwordField.value;
  if (v.length < 6) {
    errPassword.textContent = "Password must be at least 6 chars.";
    return false;
  }
  errPassword.textContent = "";
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const okName = validateNameField();
  const okEmail = validateEmailField();
  const okPass = validatePasswordField();

  if (okName && okEmail && okPass) {
    finalMessage.innerHTML =
      '<div class="success">Form Submitted Successfully</div>';
    form.reset();
    [errName, errEmail, errPassword].forEach((el) => (el.textContent = ""));
  } else {
    finalMessage.innerHTML = "";
  }
});

[nameField, emailField, passwordField].forEach((field) => {
  field.addEventListener("input", () => {
    validateNameField();
    validateEmailField();
    validatePasswordField();
  });
});
