function showNotification(text) {
  let notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = text;

  // Добавляем уведомление на страницу
  document.body.appendChild(notification);

  // Задержка перед скрытием уведомления
  setTimeout(function () {
    notification.style.display = "none"; // Скрываем уведомление
  }, 1500); // Время в миллисекундах (1,5 секунды)
}

// Пример использования функции
showNotification("Увед");
