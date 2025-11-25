$(function () {
  $("#topics").on("click", ".sub", function () {
    const btn = $(this);
    btn.text(btn.text() === "Subscribe" ? "Unsubscribe" : "Subscribe");
    $("#message").text("Subscription updated").fadeIn().delay(900).fadeOut();
  });
  $("#addTopic").on("click", function () {
    $("#topics").append(
      '<li class="topic">NewTopic <button class="sub">Subscribe</button></li>'
    );
    $("#message").text("Topic added").fadeIn().delay(900).fadeOut();
  });
  $("#removeLast").on("click", function () {
    const last = $("#topics li").last();
    last.find(".sub").off();
    last.remove();
    $("#message").text("Removed last topic").fadeIn().delay(900).fadeOut();
  });
});
