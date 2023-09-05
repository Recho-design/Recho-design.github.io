$(function () {
  $.get("navbar.html", function (data) {
    $("#navbar-container").html(data);
  });
});

$(function () {
  $.get("loading.html", function (data) {
    $("#loading-container").html(data);
  });
});

$(function () {
  $.get("count.html", function (data) {
    $("#count-container").html(data);
  });
});
