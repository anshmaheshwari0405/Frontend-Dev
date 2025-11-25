$(function () {
  $("#hide").on("click", function () {
    $("#banners .banner").hide();
  });
  $("#show").on("click", function () {
    $("#banners .banner").show();
  });
  $("#up").on("click", function () {
    $("#banners .banner").slideUp();
  });
  $("#down").on("click", function () {
    $("#banners .banner").slideDown();
  });
  $("#fade").on("click", function () {
    $("#banners .banner").fadeToggle();
  });
  let idx = 0,
    items = $("#banners .banner");
  items.hide();
  items.eq(0).show();
  setInterval(function () {
    items.eq(idx).fadeOut(600, function () {
      idx = (idx + 1) % items.length;
      items.eq(idx).fadeIn(600);
    });
  }, 5000);
});
