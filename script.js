document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-subscribe]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Subscribe");
      }
    });
  });
});
