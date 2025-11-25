$(function () {
  const base = "http://localhost:3000/tasks";
  function load(q) {
    $.get(base + (q ? "?" + q : ""), render);
  }
  function render(items) {
    $("#tasks").empty();
    items.forEach((t) => {
      const div = $(
        `<div><input type=checkbox ${t.completed ? "checked" : ""}> ${
          t.title
        } - ${t.priority}</div>`
      );
      div.find("input").on("change", function () {
        $.ajax({
          url: base + "/" + t.id,
          method: "PATCH",
          contentType: "application/json",
          data: JSON.stringify({ completed: this.checked }),
        });
      });
      $("#tasks").append(div);
    });
  }
  $("#filter").on("change", () => load($("#filter").val()));
  load();
});
