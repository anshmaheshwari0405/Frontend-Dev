const out = document.getElementById("out");
document.getElementById("day").onchange = function () {
  fetch("http://localhost:3000/timetable?day=" + this.value)
    .then((r) => r.json())
    .then((d) => {
      if (!d.length) return (out.textContent = "No classes today.");
      out.innerHTML = d
        .map((c) => c.subject + " - " + c.faculty + " " + c.time)
        .join("<br>");
    });
};
