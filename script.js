
// ELEMENTOS DE LA PÁGINA
const enterButton = document.getElementById("enterButton");
const welcomeScreen = document.getElementById("welcome");
const portfolio = document.getElementById("portfolio");
const languageButton = document.getElementById("languageButton");

let currentLanguage = "es";

// ENTRAR AL PORTAFOLIO
enterButton.addEventListener("click", () => {
  welcomeScreen.classList.add("leaving");

  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    portfolio.classList.remove("hidden");
    window.scrollTo(0, 0);
  }, 800);
});

// CAMBIAR IDIOMA
languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";

  document.documentElement.lang = currentLanguage;
  languageButton.textContent = currentLanguage === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-es][data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
});
