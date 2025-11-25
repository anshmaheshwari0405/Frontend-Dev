$(function () {
  const $input = $("#search");
  const $results = $("#results");
  const $loading = $("#loading");
  let lastXhr = null;

  function render(items) {
    $results.empty();
    if (!items || items.length === 0) {
      $results.text("No products found");
      return;
    }
    items.forEach((p) => {
      $results.append(
        `<div><img src="${p.image}" width="60">${p.name} - ₹${p.price}</div>`
      );
    });
  }

  $input.on("input", function () {
    const q = $(this).val().trim();
    $loading.show();
    if (lastXhr && lastXhr.readyState !== 4) lastXhr.abort();

    lastXhr = $.ajax({
      url: "http://localhost:3000/products", 
      data: { q },
      method: "GET",
      success: render,
      complete: () => $loading.hide(),
    });
  });
});
