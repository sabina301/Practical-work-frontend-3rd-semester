function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    var userInput = prompt("Введите число", "0");
    this.value += +userInput;
    alert(this.value); // Показать текущее значение после каждого ввода
  };
}

var accumulator = new Accumulator(1); // Начальное значение установлено в 1

document.getElementById("basket-button").addEventListener("click", function () {
  accumulator.read();
});
