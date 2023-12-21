let isNotificationEnabled = true; // флаг, определяющий, разрешено ли добавление новых уведомлений

function addNotification() {
  if (isNotificationEnabled) {
    let block = document.getElementById("blockNotId");
    let quantityNotification = document.getElementById("quantityNotification");
    let count = parseInt(quantityNotification.innerText);
    count++;
    quantityNotification.innerText = count;
    let notification = document.createElement("div");
    notification.className = "back-not-t";

    let notificationText = document.createElement("p");
    notificationText.className = "p-not-t";
    notificationText.innerText = `Уведомление ${count}`;

    notification.appendChild(notificationText);
    block.appendChild(notification);
  }
}

// Функция, которая блокирует добавление новых уведомлений на 10 секунд
function delayAddNotification() {
  isNotificationEnabled = false; // блокируем добавление уведомлений
  addNotification(); // вызываем функцию добавления уведомления
  setTimeout(() => {
    isNotificationEnabled = true; // разблокируем добавление уведомлений после истечения времени
  }, 10000); // блокировка на 10 секунд (10000 миллисекунд)
}

// Вызываем функцию delayAddNotification при нажатии на кнопку или другое событие
// Например, при нажатии на кнопку:
document
  .getElementById("BackNotId")
  .addEventListener("click", delayAddNotification);
setInterval(addNotification, 3000);
