function trocaTema() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

// Salva a preferência no LocalStorage
if (html.classList.contains("light")) {
  localStorage.setItem("theme", "light");
} else {
  localStorage.setItem("theme", "");
}

// Verifica a preferência ao carregar a página
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}
