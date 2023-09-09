const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const masculino = frm.inMasculino.value;
  const feminino = frm.inFeminino.value;
  const altura = Number(frm.inAltura.value);

  if (masculino) {
    const peso = 21 * Math.pow(altura, 2);
    resp.innerText = "Seu peso ideal é: " + peso.toFixed(3);
  } else {
    const peso = 22 * Math.pow(altura, 2);
    resp.innerText = "Seu peso ideal é: " + peso.toFixed(3);
  }
});
