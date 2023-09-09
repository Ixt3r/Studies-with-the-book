//cria referencia ao form e aos elementos de resporta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1"); //id da tag de output <h3>
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value; //obtém do formulario, o valor do id 'inVeiculo'
  const preco = Number(frm.inPreco.value); //obtém do formulario, em valor númerico, o valor do id 'inPreco'

  const entrada = preco * 0.5; //calcula valor da entrada
  const parcela = (preco * 0.5) / 12; //...e das parcelas

  resp1.innerText = "Promoção:" + veiculo; //exibe as respostas
  resp2.innerText = "Entrada de: " + entrada.toFixed(2);
  resp3.innerText = "+ 12x de " + parcela.toFixed(2);

  e.preventDefault(); //evita envio do form
});
