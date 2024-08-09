//localStorage.clear();
console.log(
  "O sistema prefere o modo de cor:",
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "ESCURO"
    : "CLARO",
  "se o site está sendo mostrado no modo errado pode ser necessário limpar o LocalStorage usando o código comentado na primeira linha."
);

function trocaTema() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Salva a preferência no LocalStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("tema", "light");
  } else {
    localStorage.setItem("tema", "dark"); // Corrigir: salvar "dark" quando não for claro
  }
}

// Ao carregar a página, verifica no LocalStorage se há preferência por tema
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
  // Aplicar a preferência do usuário
  if (temaSalvo === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
} else {
  // Verifica a preferência do navegador se não houver preferência salva
  const prefereLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  if (prefereLight) {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
}

function trocaAvatar() {
  const avatar = document.getElementById("avatar");
  const avatarAtual = getComputedStyle(avatar).backgroundImage;

  // URLs das imagens
  const avatarDark = "url(../assets/avatar.png)";
  const avatarLight = "url(../assets/avatar-light.png)"; // Substitua pelo caminho da segunda imagem

  // Alterna entre as duas imagens com animação
  avatar.classList.add("flip");

  setTimeout(() => {
    if (avatarAtual.includes("avatar.png")) {
      avatar.style.backgroundImage = avatarLight;
    } else {
      avatar.style.backgroundImage = avatarDark;
    }
    avatar.classList.remove("flip");
  }, 150); // Tempo para a metade da animação
}
