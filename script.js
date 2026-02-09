var num = document.getElementById("txtNum");
var txtAdicionado = document.getElementById("txtAdicionado");
var resultado = document.getElementById("resultado");
var conjunto = [];

function adicionar() {
  resultado.innerHTML = "";
  var valor = Number(num.value);

  if (valor < 1 || valor > 100 || num.value.length === 0) {
    alert("Digite um valor válido");
  } else if (conjunto.includes(valor)) {
    alert("Valor já adicionado");
  } else {
    conjunto.push(valor);

    var item = document.createElement("option");
    item.text = `Número ${valor} foi adicionado`;
    txtAdicionado.appendChild(item);
  }
  num.value = "";
}

function apagar() {
  conjunto = [];
  txtAdicionado.innerHTML = "";
  num.value = "";
}

function finalizar() {
  conjunto.sort((a, b) => a - b);

  var soma = 0;

  for (var i = 0; i < conjunto.length; i++) {
    soma += conjunto[i];
  }

  var media = soma / conjunto.length;

  resultado.innerHTML =
    `Os números são: ${conjunto}<br>` +
    `O menor valor é ${conjunto[0]}<br>` +
    `O maior valor é ${conjunto[conjunto.length - 1]}<br>` +
    `A média é ${media}`;
}
