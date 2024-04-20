function ajustarAparencia() {
  var agora = new Date();
  var hora = agora.getHours();

  if (hora >= 6 && hora < 12) {
      // Manhã
      document.bgColor = "white";
      document.body.style.color = "black";
  } else if (hora >= 12 && hora < 18) {
      // Tarde
      document.bgColor = "yellow";
      document.body.style.color = "black";
  } else if (hora >= 18 && hora < 24) {
      // Noite
      document.bgColor = "black";
      document.body.style.color = "white";
  } else {
      // Madrugada
      document.bgColor = "blue";
      document.body.style.color = "white";
  }
}

window.onload = ajustarAparencia;
