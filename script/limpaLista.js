
let list = document.querySelector("#list");
let deleteBtn = document.querySelector("#delete");


deleteBtn.addEventListener("click", del);

function del() {
    list.style.display = 'none';
    localStorage.removeItem("nome");
    localStorage.removeItem("pass");
    localStorage.removeItem("pais");
    localStorage.removeItem("idade");
    localStorage.removeItem("msg");
}