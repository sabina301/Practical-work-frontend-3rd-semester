document.addEventListener("DOMContentLoaded", function () {
  var animatedBackground = document.getElementById("animatedBackground");
  var scaleElement = document.getElementById("scaleElement");

  // Первая анимация: изменение цвета фона
  animatedBackground.addEventListener("mouseover", function () {
    // Генерируем случайный цвет в формате #RRGGBB
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    animatedBackground.style.backgroundColor = randomColor;
  });

  // Вторая анимация: масштабирование при наведении
  scaleElement.addEventListener("mouseover", function () {
    scaleElement.style.transform = "scale(1.1)";
  });

  scaleElement.addEventListener("mouseout", function () {
    scaleElement.style.transform = "scale(1)";
  });
});
