const productInput = document.getElementById("product-input");
const addButton = document.getElementById("add-product");
const productList = document.getElementById("product-list");

addButton.addEventListener("click", () => {
  const name = productInput.value.trim();
  if (!name) return;
  addProductToList(name);
  productInput.value = "";
});

function addProductToList(name) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="product-name">${escapeHtml(name)}</span>
    <span class="controls">
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </span>
  `;
  productList.appendChild(li);
}

productList.addEventListener("click", (e) => {
  const action = e.target.getAttribute("data-action");
  const li = e.target.closest("li");
  if (!li || !action) return;

  if (action === "delete") {
    li.remove();
  } else if (action === "edit") {
    enterEditMode(li);
  }
});

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

let editingLi = null;

function enterEditMode(li) {
  if (editingLi && editingLi !== li) saveEditingItem();

  const spanName = li.querySelector(".product-name");
  const oldText = spanName.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = oldText;
  input.className = "edit-input";
  li.insertBefore(input, spanName);
  li.removeChild(spanName);
  input.focus();
  editingLi = li;

  input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      saveEditingItem();
    } else if (ev.key === "Escape") {
      cancelEditingItem(oldText);
    }
  });

  document.addEventListener("click", handleDocumentClickForSave, true);
}

function saveEditingItem() {
  if (!editingLi) return;
  const input = editingLi.querySelector("input.edit-input");
  const newVal = (input.value || "").trim() || "Unnamed Product";
  const span = document.createElement("span");
  span.className = "product-name";
  span.textContent = newVal;
  editingLi.insertBefore(span, input);
  input.remove();
  cleanupAfterEdit();
}

function cancelEditingItem(originalText) {
  if (!editingLi) return;
  const input = editingLi.querySelector("input.edit-input");
  const span = document.createElement("span");
  span.className = "product-name";
  span.textContent = originalText;
  editingLi.insertBefore(span, input);
  input.remove();
  cleanupAfterEdit();
}

function cleanupAfterEdit() {
  document.removeEventListener("click", handleDocumentClickForSave, true);
  editingLi = null;
}

function handleDocumentClickForSave(e) {
  if (editingLi && editingLi.contains(e.target)) return;
  saveEditingItem();
}
