function verificarMaiusculas() 
{
  const textoInput = document.getElementById("texto__input");
  const valorTextoInput = textoInput.value;
  const botaoCript = document.getElementById("botaoCript");
  let invalido = !(/^[a-z ]+$/.test(valorTextoInput));

  if (valorTextoInput=="")
  {
    invalido = false;
  }

  if (invalido) {
    botaoCript.disabled = true;
    botaoCript.style.cssText = "background-color: gray;";
    textoInput.style.cssText = "color: red;";
  } else {
    botaoCript.disabled = false;
    textoInput.style.cssText = "color: #0A3871;";
    botaoCript.style.cssText = "background-color: #0A3871;";
    if(valorTextoInput=="priscila")
    {
      alert("TE AMO MEU AMOR <3");
    }
  }
}
