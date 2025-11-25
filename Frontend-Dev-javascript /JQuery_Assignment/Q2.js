$(function () {
  $(".product").on("click", function () {
    $(this).siblings().css("background", "");
    $(this).css("background", "#fffbcc");
    const stock = Number($(this).attr("data-stock"));
    if (stock <= 0) alert($(this).attr("data-name") + " is out of stock");
  });
  $(".product").hover(
    function () {
      if (!$(this).find(".more").length)
        $(this).append('<div class="more">Extra details available</div>');
    },
    function () {
      $(this).find(".more").remove();
    }
  );
  $(".fav").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });
  $('.product[data-discount!="0"]').css("border", "2px dashed #f90");
});
