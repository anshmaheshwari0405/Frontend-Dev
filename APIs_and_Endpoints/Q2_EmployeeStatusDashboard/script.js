(function () {
  const base = "http://localhost:3000/employees";
  const list = document.getElementById("list");

  function load() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", base);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      render(data);
    };
    xhr.send();
  }

  function render(items) {
    list.innerHTML = "";
    items.forEach((emp) => {
      const row = document.createElement("div");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.checked = emp.status === "active";

      toggle.addEventListener("change", () => {
        const newStatus = toggle.checked ? "active" : "inactive";
        const patch = new XMLHttpRequest();
        patch.open("PATCH", base + "/" + emp.id);
        patch.setRequestHeader("Content-Type", "application/json");
        patch.send(JSON.stringify({ status: newStatus }));
      });

      row.append(emp.name + " — " + emp.status, toggle);
      list.append(row);
    });
  }

  load();
})();
