function trocaTema() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Salva a preferência no LocalStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "");
  }
}

// Verifica a preferência ao carregar a página
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
} else {
  // Verifica a preferência do navegador
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersLight) {
    document.documentElement.classList.add("light");
  } else if (prefersDark) {
    document.documentElement.classList.remove("light");
  }
}
