function addLi() {
  p = prompt("Введите текст");
  if (p !== null && p.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = p;

    let ul = document.getElementById("ul-id");
    ul.appendChild(li);

    addLi(p);
  }
}

let button = document.getElementById("button");
button.addEventListener("click", addLi);
