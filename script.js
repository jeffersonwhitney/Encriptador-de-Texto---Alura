function verificarMaiusculas() 
{
  const textoInput = document.getElementById("texto__input");
  const valorTextoInput = textoInput.value;
  const botaoCript = document.getElementById("botaoCript");

  // const possuiMaiusculas = /[A-Z]/.test(valorTextoInput);
  const possuiMinuscula = /[a-z]/.test(valorTextoInput);
  const possuiEspaco = /[ ]/.test(valorTextoInput);

  if (possuiMinuscula || possuiEspaco) {
    botaoCript.disabled = false;
    textoInput.style.cssText = "color: #0A3871;";
  } else {
    botaoCript.disabled = true;
    textoInput.style.cssText = "color: red;";
  }
}

function temLetraMaiuscula()
{
  alert("funcionou");
}