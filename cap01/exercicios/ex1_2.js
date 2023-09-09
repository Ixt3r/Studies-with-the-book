const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  const conta = Number(frm.inConta.value);
  const pessoas = Number(frm.inPessoas.value);
  const valorPraCada = conta / pessoas;

  resp1.innerText = "Total da conta: " + conta;
  resp2.innerText = "Valor para cada pessoa" + valorPraCada.toFixed(2);

  e.preventDefault();
});
