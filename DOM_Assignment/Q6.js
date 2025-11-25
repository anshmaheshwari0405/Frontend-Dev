const searchBox = document.getElementById("search-box");
const studentsTable = document.getElementById("students-table");
const tbody = studentsTable.tBodies[0];
const noResultsDiv = document.getElementById("no-results");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLowerCase();
  let anyVisible = false;

  Array.from(tbody.rows).forEach((row) => {
    const rowText = Array.from(row.cells)
      .map((c) => c.textContent.toLowerCase())
      .join(" ");
    const matches = rowText.includes(query);
    row.style.display = matches ? "" : "none";
    if (matches) anyVisible = true;
  });

  noResultsDiv.style.display = anyVisible ? "none" : "block";
});
