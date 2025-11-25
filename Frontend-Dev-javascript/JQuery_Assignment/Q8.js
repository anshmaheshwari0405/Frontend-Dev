$(function () {
  $("#add").on("click", function () {
    $("#posts").append(
      '<article class="post">New post ' + Date.now() + "</article>"
    );
  });
  $("#prepend").on("click", function () {
    $("#posts").prepend(
      '<article class="post featured">Featured post ' +
        Date.now() +
        "</article>"
    );
  });
  $("#removeLast").on("click", function () {
    $("#posts article").last().remove();
  });
  $("#posts").on("dblclick", ".post", function () {
    $(this).before('<span class="tag">TAG</span>');
    $(this).after('<span class="tagAfter">/TAG</span>');
  });
  $("#posts").on("click", function () {
    $("#posts .post").each(function () {
      if ($(this).text().toLowerCase().indexOf("js") !== -1)
        $(this).css("background", "#ffebb3");
    });
  });
});
