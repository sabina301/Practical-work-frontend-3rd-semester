document.addEventListener("DOMContentLoaded", function () {
  let parallaxText = document.getElementById("parallaxText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition <= 1000) {
      parallaxText.style.transform = `translateY(${Math.max(
        100,
        scrollPosition * 0.7 - 350
      )}px)`;
    }
  });
});
