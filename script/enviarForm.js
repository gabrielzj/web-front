
let btn = document.querySelector("#send");

let nome = document.querySelector("#name");
let pass = document.querySelector("#email");
let pais = document.querySelector("#country");
let idade = document.querySelector("#age");
let msg = document.querySelector("#message");


btn.addEventListener("click", send);

function send(event) {
  //impede a página  recarregue 
  event.preventDefault();

  let form = document.querySelector("#myform");
  let lst = document.querySelector("#list")
  //para cada input do form
  Array.from(form.elements).forEach((input) => {
    if (input.type === 'text' || input.type === 'number' || input.type === 'textarea') {
        let valor = input.value;
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("senha", pass.value);
        localStorage.setItem("país", pais.value);
        localStorage.setItem("idade", idade.value);
        localStorage.setItem("msg", msg.value);
        if (valor) {
          let li = document.createElement('li');
          li.textContent = valor;
          lst.appendChild(li);
        }
      }
  })
} 
