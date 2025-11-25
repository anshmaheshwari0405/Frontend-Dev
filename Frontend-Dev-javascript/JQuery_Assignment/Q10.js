$(function () {
  $("#reg").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const pwd = $("#password").val();
    let ok = true;
    $("#name,#email,#password").css("border", "");
    if (!name) {
      $("#name").css("border", "2px solid red");
      ok = false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      $("#email").css("border", "2px solid red");
      ok = false;
    }
    if (
      $("#users li").filter(function () {
        return $(this).text() === email;
      }).length
    ) {
      $("#email").css("border", "2px solid red");
      $("#msg").text("Email already used");
      ok = false;
    }
    if (pwd.length < 8) {
      $("#password").css("border", "2px solid red");
      ok = false;
    }
    if (ok) $("#msg").text("Registration successful");
  });
});
