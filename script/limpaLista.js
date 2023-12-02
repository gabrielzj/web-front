
let list = document.querySelector("#list");
let deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", del);

function del() {
    // limpar lista da tela
    list.innerHTML = ''

    // remover do localStorage
    localStorage.removeItem("nome");
    localStorage.removeItem("senha");
    localStorage.removeItem("pais");
    localStorage.removeItem("idade");
    localStorage.removeItem("msg");
}
