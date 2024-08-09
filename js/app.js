localStorage.clear();
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
    localStorage.setItem("tema", "");
  }
}

// Ao carregar a página, verifica no LocalStorage se há preferência por tema
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  document.documentElement.classList.add(temaSalvo);
} else {
  // Verifica a preferência do navegador
  const prefereLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const prefereDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefereLight) {
    document.documentElement.classList.add("light");
  } else if (prefereDark) {
    document.documentElement.classList.remove("light");
  }
}
