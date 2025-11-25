(function ($) {
  $(function () {
    const items = $("#carousel").text().split("|");
    let i = 0;
    $("#carousel").text(items[i]);
    setInterval(function () {
      i = (i + 1) % items.length;
      $("#carousel").fadeOut(300, function () {
        $(this).text(items[i]).fadeIn(300);
      });
    }, 3000);
  });
})(jq1);
(function ($) {
  $(function () {
    $("#modalTrigger").on("click", function () {
      alert("Modal from jq2");
    });
    $(".widget").hover(function () {
      $(this).attr("title", "Info about " + $(this).text());
    });
    $(".widget").first().css("font-weight", "700");
  });
})(jq2);
