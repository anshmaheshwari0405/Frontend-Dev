const steps = {
  1: document.getElementById("step-1"),
  2: document.getElementById("step-2"),
  3: document.getElementById("step-3"),
};
const summaryDiv = document.getElementById("summary");
const summaryContent = document.getElementById("summary-content");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

let currentStep = 1;

function showStep(n) {
  Object.values(steps).forEach((s) => s.classList.remove("active"));
  steps[n].classList.add("active");
  currentStep = n;
}

function validateName() {
  const val = nameInput.value.trim();
  if (!val) {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}
function validateEmail() {
  const val = emailInput.value.trim();
  if (!val) {
    emailError.textContent = "Email is required.";
    return false;
  }
  if (!val.includes("@")) {
    emailError.textContent = "Email must contain @.";
    return false;
  }
  emailError.textContent = "";
  return true;
}
function validatePassword() {
  const val = passwordInput.value;
  if (val.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

document.getElementById("to-step-2").addEventListener("click", () => {
  if (validateName()) showStep(2);
});
document
  .getElementById("back-to-1")
  .addEventListener("click", () => showStep(1));
document.getElementById("to-step-3").addEventListener("click", () => {
  if (validateEmail()) showStep(3);
});
document
  .getElementById("back-to-2")
  .addEventListener("click", () => showStep(2));

document.getElementById("finish").addEventListener("click", () => {
  const ok = validatePassword() & validateEmail() & validateName();
  if (ok) {
    steps[1].classList.remove("active");
    steps[2].classList.remove("active");
    steps[3].classList.remove("active");
    summaryDiv.style.display = "block";
    summaryContent.innerHTML = `
      <p><strong>Name:</strong> ${escapeHtml(nameInput.value)}</p>
      <p><strong>Email:</strong> ${escapeHtml(emailInput.value)}</p>
      <p><strong>Password:</strong> ${"*".repeat(
        Math.min(10, passwordInput.value.length)
      )} (hidden)</p>
    `;
  }
});

[nameInput, emailInput, passwordInput].forEach((el) =>
  el.addEventListener("input", () => {
    validateName();
    validateEmail();
    validatePassword();
  })
);

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
