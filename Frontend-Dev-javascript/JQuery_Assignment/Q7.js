$(function () {
  $("#search").on("keyup", function () {
    const q = $(this).val().toLowerCase();
    let matched = 0;
    $("#courses li").each(function () {
      const txt = $(this).text();
      if (q && txt.toLowerCase().indexOf(q) !== -1) {
        $(this).css("font-weight", "700");
        $(this).show();
        matched++;
      } else if (q) {
        $(this).hide();
      } else {
        $(this).css("font-weight", "");
        $(this).show();
      }
    });
    $("#count").text("Matched: " + matched);
  });
  $("#clear").on("click", function () {
    $("#search").val("");
    $("#courses li").show().css("font-weight", "");
    $("#count").text("Matched: 0");
  });
});
