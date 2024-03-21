function verificar() 
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

function cript()
{
  const textoInput = document.getElementById("texto__input");
  const textOutput = document.getElementById("textOutput");

  let valorTextoInput = textoInput.value;

  valorTextoInput = valorTextoInput.replace("e", "enter");
  valorTextoInput = valorTextoInput.replace("i", "imes");
  valorTextoInput = valorTextoInput.replace("a", "ai");
  valorTextoInput = valorTextoInput.replace("o", "ober");
  valorTextoInput = valorTextoInput.replace("u", "ufat");
  textOutput.textContent = valorTextoInput;
  if(valorTextoInput!=="")
  {
    const figuras_direita = document.getElementById("figuras_direita");
    figuras_direita.style.display = "none";
    const textOutput = document.getElementById("textOutput");
    textOutput.style.display = "flex";
    const area_util_direita = document.getElementById("area_util_direita");
    // area_util_direita.style.justifyContent = "flex-start";


  }
  else
  {
    const figuras_direita = document.getElementById("figuras_direita");
    figuras_direita.style.display = "flex";
    textOutput.style.display = "none";
    const area_util_direita = document.getElementById("area_util_direita");
    // area_util_direita.style.justifyContent = "center";
  }

}

function descript()
{ 
  const textoInput = document.getElementById("texto__input");
  const textOutput = document.getElementById("textOutput");

  let valorTextoInput = textoInput.value;

  valorTextoInput = valorTextoInput.replace("enter", "e");
  valorTextoInput = valorTextoInput.replace("imes", "i");
  valorTextoInput = valorTextoInput.replace("ai", "a");
  valorTextoInput = valorTextoInput.replace("ober", "o");
  valorTextoInput = valorTextoInput.replace("ufat", "u");
  textOutput.textContent = valorTextoInput;

  if(valorTextoInput!=="")
  {
    const figuras_direita = document.getElementById("figuras_direita");
    figuras_direita.style.display = "none";
    textOutput.style.display = "flex"
    const area_util_direita = document.getElementById("area_util_direita");
    // area_util_direita.style.justifyContent = "flex-start";

  }
  else
  {
    const figuras_direita = document.getElementById("figuras_direita");
    figuras_direita.style.display = "flex";
    textOutput.style.display = "none"
    const area_util_direita = document.getElementById("area_util_direita");
    // area_util_direita.style.justifyContent = "center";
  }

}

