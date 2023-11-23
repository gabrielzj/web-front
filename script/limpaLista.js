
let list = document.querySelector("#list");
let deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", del);

function del() {
  if(list.style.display != 'none')
    list.style.display = 'none';
  else
    window.alert('Lista Vazia!');
}