// Meta Pixel Subscribe Event
document.addEventListener("DOMContentLoaded", function () {
  const telegramBtn = document.getElementById("telegramBtn");

  if (telegramBtn) {
    telegramBtn.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Subscribe");
      }

      window.location.href = "https://t.me/+2CfR4-D5Fkk2ODBl";
    });
  }
});
