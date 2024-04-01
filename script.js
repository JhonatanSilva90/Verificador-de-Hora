// Criando o elemento header e seu conteúdo
let header = document.createElement("header");
let h1 = document.createElement("h1");
h1.textContent = "Hora do Dia";
header.appendChild(h1);

// Criando o elemento section e seu conteúdo
let section = document.createElement("section");
let divMsg = document.createElement("div");
divMsg.id = "msg";
divMsg.textContent = "Aqui vai aparecer a hora...";
let divFoto = document.createElement("div");
divFoto.id = "foto";
let imagem = document.createElement("img");
imagem.id = "imagem";
imagem.src = "/assets/manha.jpg";
imagem.alt = "foto do período do dia";
divFoto.appendChild(imagem);
section.appendChild(divMsg);
section.appendChild(divFoto);

// // Criando o elemento footer e seu conteúdo
// Criando o elemento div para o footer
let footer = document.createElement("div");
footer.classList.add("footer");

// Criando o elemento a para o logo-footer
let logoFooterLink = document.createElement("a");
logoFooterLink.classList.add("logo-footer");
logoFooterLink.href = "";

// Criando os spans para o logo-footer
let logoSpan1 = document.createElement("span");
logoSpan1.textContent = "JH";
let logoSpan2 = document.createElement("span");
logoSpan2.textContent = "Developer";

// Adicionando os spans ao link
logoFooterLink.appendChild(logoSpan1);
logoFooterLink.appendChild(logoSpan2);

// Criando o elemento div para o reserved
let reservedDiv = document.createElement("div");
reservedDiv.classList.add("reserved");

// Criando o parágrafo para o reserved
let reservedParagraph = document.createElement("p");
reservedParagraph.textContent = "© 2024 JHDeveloper. All right reserved.";

// Adicionando o parágrafo ao div reserved
reservedDiv.appendChild(reservedParagraph);

// Criando o elemento div para os links-footer
let linksFooterDiv = document.createElement("div");
linksFooterDiv.classList.add("links-footer");

// Criando os links para o LinkedIn e o GitHub
let linkedInLink = document.createElement("a");
linkedInLink.href = "https://www.linkedin.com/in/jhonatan-silva-834773292";
let linkedInImage = document.createElement("img");
linkedInImage.src = "./assets/linkedin.png";
linkedInImage.alt = "";
linkedInLink.appendChild(linkedInImage);

let githubLink = document.createElement("a");
githubLink.href = "https://github.com/JhonatanSilva90";
let githubImage = document.createElement("img");
githubImage.src = "./assets/github.png";
githubImage.alt = "";
githubLink.appendChild(githubImage);

// Adicionando os links ao div links-footer
linksFooterDiv.appendChild(linkedInLink);
linksFooterDiv.appendChild(githubLink);

// Adicionando todos os elementos ao footer
footer.appendChild(logoFooterLink);
footer.appendChild(reservedDiv);
footer.appendChild(linksFooterDiv);

// Adicionando o footer ao final do body
document.body.appendChild(footer);

// Adicionando os elementos ao documento
document.body.appendChild(header);
document.body.appendChild(section);
document.body.appendChild(footer);

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
