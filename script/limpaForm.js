
let limpaForm = document.querySelector("#clearForm");

limpaForm.addEventListener("click", limpform);

function limpform(event) {
  event.preventDefault();

  let form = document.querySelector("#myform");

  Array.from(form.elements).forEach((input) => {
    if (input.value != ''){
      input.value = '';
    }
  })
}