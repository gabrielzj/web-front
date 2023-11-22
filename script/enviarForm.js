
let btn = document.querySelector("#send");

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
      if (valor) {
        let li = document.createElement('li');
        li.textContent = valor;
        lst.appendChild(li);
      }
    }
  })
} 