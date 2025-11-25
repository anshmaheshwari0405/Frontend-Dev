const imageGrid = document.getElementById("image-grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalContent = modal.querySelector(".modal-content");

imageGrid.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  modalImg.src = img.src.replace("/300/200", "/800/600") || img.src;
  modal.classList.add("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
  modalImg.src = "";
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
