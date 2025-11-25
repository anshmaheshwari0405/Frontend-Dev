const themeButtons = document.querySelectorAll("button[data-theme]");
const body = document.body;

if (!body.getAttribute("data-theme")) body.setAttribute("data-theme", "light");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const chosenTheme = btn.getAttribute("data-theme");
    body.setAttribute("data-theme", chosenTheme);
    body.setAttribute("data-current-theme", chosenTheme);
  });
});
