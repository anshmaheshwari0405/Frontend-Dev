$(function () {
  $(".manager").on("click", function () {
    $(this).siblings("ul").find(".employee").css("background", "#ffd");
  });
  $(".employee").hover(
    function () {
      if (!$(this).next(".contact").length)
        $(this).after(
          '<div class="contact">' + $(this).attr("data-contact") + "</div>"
        );
    },
    function () {
      $(this).next(".contact").remove();
    }
  );
  $(".department h2").on("click", function () {
    $(this).parent().children("ul").find(".employee").css("background", "#efe");
  });
  const allEmp = $(".employee");
  $("#directory").on("click", function () {
    const idx = Math.floor(Math.random() * allEmp.length);
    const chosen = allEmp.eq(idx);
    chosen.siblings().css("opacity", 0.6);
    chosen.css("border", "2px solid #00f");
  });
  $(".department h2").on("dblclick", function () {
    $(this).parent().find("ul").toggle();
  });
});
