const form = document.querySelector("#myform");

form.addEventListener("submit", send);

function send(event) {
  //impede a página  recarregue 
  event.preventDefault();

  // pegar dados do input de cada campo do form
  const nome = document.querySelector("#name")
  const senha = document.querySelector("#email")
  const pais = document.querySelector("#country")
  const idade = document.querySelector("#age")
  const msg = document.querySelector("#message")

  // criar um objeto em que cada atributo é um campo do form
  const camposForm = {
    nome: nome.value,
    senha: senha.value,
    pais: pais.value,
    idade: idade.value,
    msg: msg.value
  }

  // para cada campo do form, adicionar um list item
  const lista = document.querySelector("#list")

  for (const campo in camposForm) {
    const li = document.createElement('li');
    li.textContent = camposForm[campo];
    lista.appendChild(li);
  }

  // adicionar campos do formulario no localStorage
  for (const campo in camposForm) {
    localStorage.setItem(campo, camposForm);
  }

  form.reset();
} 
