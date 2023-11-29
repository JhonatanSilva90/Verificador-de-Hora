function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "/assets/manha.jpg";
    document.body.style.background = "#3a86ff";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "/assets/tarde.jpg";
    document.body.style.background = "#f4a16e";
  } else {
    img.src = "/assets/noite.jpg";
    document.body.style.background = "#69239e";
  }
}
