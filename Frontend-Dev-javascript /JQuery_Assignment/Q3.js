$(function () {
  $(".q").on("click", function () {
    $(this).next(".a").slideToggle();
  });
  $(".q").hover(
    function () {
      $(this).css("color", "#007acc");
    },
    function () {
      $(this).css("color", "");
    }
  );
  $(".q").on("dblclick", function () {
    $(".a").slideUp();
  });
  $(".ansInput")
    .on("focus", function () {
      $(this).closest(".qa").find(".q").css("background", "#eef");
    })
    .on("blur", function () {
      $(this).closest(".qa").find(".q").css("background", "");
    });
});
