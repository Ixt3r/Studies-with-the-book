const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value);
  const consumo = Number(frm.inConsumo.value);

  const valor = (quilo / 1000) * consumo; //calcula o valor a ser pago

  resp.innerText = "Valor a pagar: " + valor.toFixed(2);

  e.preventDefault();

  //outra forma de calcular o valor pela grama - MAIS FACIL
  //const valor = (consumo * quilo) / 1000;
});
