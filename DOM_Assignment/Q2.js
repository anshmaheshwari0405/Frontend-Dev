const textarea = document.getElementById("text-area");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-btn");
const MAX = 100;

function updateCounter() {
  const remaining = MAX - textarea.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.classList.remove("yellow", "red");
  if (remaining <= 0) {
    counter.classList.add("red");
  } else if (remaining <= 20) {
    counter.classList.add("yellow");
  }
}

textarea.addEventListener("keydown", (e) => {
  const isControlKey =
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.ctrlKey ||
    e.metaKey ||
    e.key.startsWith("Arrow");
  if (!isControlKey && textarea.value.length >= MAX) {
    e.preventDefault();
  }
});

textarea.addEventListener("input", (e) => {
  if (textarea.value.length > MAX) {
    textarea.value = textarea.value.slice(0, MAX);
  }
  updateCounter();
});

resetButton.addEventListener("click", () => {
  textarea.value = "";
  updateCounter();
});

updateCounter();
