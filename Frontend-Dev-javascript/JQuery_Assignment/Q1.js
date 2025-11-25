$(function () {
  const h = new Date().getHours();
  const g =
    h < 12 ? "Good Morning" : h < 18 ? "Good Afternoon" : "Good Evening";
  $("#greet").text(g + ", Harsh Sharma");
  $("#greet").on("click", function () {
    alert("Hello Harsh!");
  });
  $("#change").on("click", function () {
    $("#greet").text("Keep going — small steps every day.");
  });
  $("#toggleMsg").on("click", function () {
    $("#welcomeMsg").toggle();
  });
});
