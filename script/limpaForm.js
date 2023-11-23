
let limpaForm = document.querySelector("#clearForm");

limpaForm.addEventListener("click", limpform);

function limpform(event) {
  event.preventDefault();

  let form = document.querySelector("#myform");

  Array.from(form.elements).forEach((input) => {
    if (input.value == ''){
      window.alert("Os campos estão vazios! Preencha-os");
    }else if(input.value != ''){
      input.value == '';
    }
  })
}