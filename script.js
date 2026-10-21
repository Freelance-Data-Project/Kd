// Meta Pixel Subscribe Event

document.addEventListener("DOMContentLoaded", function () {
  const subscribeButtons = document.querySelectorAll("[data-subscribe]");

  subscribeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Meta Pixel Subscribe Event
      if (typeof fbq === "function") {
        fbq("track", "Subscribe");
      }

      // Telegram redirect
      window.location.href = "https://t.me/+2CfR4-D5Fkk2ODBl";
    });
  });
});
