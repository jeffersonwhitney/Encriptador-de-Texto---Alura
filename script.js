const texto_input = document.querySelector("#texto__input").value;

function temLetraMaiuscula(texto_input) {
    console.log("funcionou");
    return texto_input !== texto_input.toLowerCase();

  }
  
if (temLetraMaiuscula(texto_input)) {
    console.log("O texto contém letras maiúsculas.");
  } else {
    console.log("O texto não contém letras maiúsculas.");
  }