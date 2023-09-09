const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const masculino = frm.inMasculino.checked; //checked= verifica se o campo RadioButton está selecionado
  const altura = Number(frm.inAltura.value);

  let peso; //declara variavel peso
  if (masculino) {
    peso = 22 * Math.pow(altura, 2); //Math.pow = base elevado ao expoente
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  resp.innerText = nome + "Seu peso ideal é: " + peso.toFixed(3) + "Kg";

  //Alterando o bloco if para operador ternário
  //
  // const peso = masculino ? 22 * math.pow(altura,2) : 21 * math.pow(altura,2)
});
