function temLetraMaiuscula() {
    const texto_input = document.getElementById("texto__input").value;
    console.log(texto_input);
    if (texto_input !== texto_input.toLowerCase()) {
      console.log("O texto contém letras maiúsculas.");
    } else {
      console.log("O texto não contém letras maiúsculas.");
    }
  }
  
