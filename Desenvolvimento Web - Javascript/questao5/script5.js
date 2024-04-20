
function calcularDiferencaData() {
  var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
  var dataInserida;

  while (true) {
    dataInserida = prompt("Por favor, insira uma data no formato DD/MM/AAAA:");
    if (dataInserida === null) {
      alert("Operação cancelada pelo usuário.");
      break;
    }
    if (regex.test(dataInserida)) {
      var partes = dataInserida.split("/");
      var dataInseridaObj = new Date(partes[2], partes[1] - 1, partes[0]);
      var dataAtual = new Date();
      var diferencaEmMilisegundos = dataInseridaObj - dataAtual;

      if (diferencaEmMilisegundos > 0) {
        var dias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
        var meses = Math.floor(dias / 30.44);
        var anos = Math.floor(meses / 12);

        alert("Faltam " + dias + " dias, " + meses + " meses e " + anos + " anos para a data " + dataInserida + ".");
      } else {
          alert("A data " + dataInserida + " já passou.");
        }
      break;
  } else {
    alert("Data inserida inválida. Por favor, insira uma data válida.");
  }
  }
}

// Exemplo de uso
calcularDiferencaData();
