const dropdown = document.getElementById("custom-dropdown");
const btn = document.getElementById("dropdown-btn");
const options = document.getElementById("options");
const selectedText = document.getElementById("selected-text");
const arrow = document.getElementById("arrow");

let open = false;

btn.addEventListener("click", () => {
  open = !open;
  options.classList.toggle("open", open);
  arrow.classList.toggle("rotate", open);
});

options.addEventListener("click", (e) => {
  const opt = e.target.closest(".option-item");
  if (!opt) return;

  selectedText.textContent = opt.querySelector(".option-title").textContent;
  open = false;
  options.classList.remove("open");
  arrow.classList.remove("rotate");
});

document.addEventListener(
  "click",
  (e) => {
    if (!dropdown.contains(e.target)) {
      open = false;
      options.classList.remove("open");
      arrow.classList.remove("rotate");
    }
  },
  true
);
