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
    notification.style.position = "relative";

    let notificationText = document.createElement("p");
    notificationText.className = "p-not-t";
    notificationText.innerText = `Уведомление ${count}`;

    let cross = document.createElement("img");
    cross.src = "/img/cross.png";
    cross.style.width = "15px";
    cross.style.height = "15px";
    cross.style.position = "absolute";
    cross.style.right = "10px";
    cross.style.top = "10px";

    notification.appendChild(cross);
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

document
  .getElementById("BackNotId")
  .addEventListener("click", delayAddNotification);
setInterval(addNotification, 3000);

document
  .getElementById("blockNotId")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      event.target.parentNode.remove(); // Удаляем уведомление при клике на крестик
    }
  });
