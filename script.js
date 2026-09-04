const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
  themeToggle.textContent = "☀️ Light Theme";
} else {
  document.body.dataset.theme = "light";
  themeToggle.textContent = "🌙 Dark Theme";
}


themeToggle.addEventListener("click", () => {

  const currentTheme =
    document.body.dataset.theme;

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  document.body.dataset.theme =
    newTheme;

  localStorage.setItem(
    "theme",
    newTheme
  );

  themeToggle.textContent =
    newTheme === "dark"
      ? "☀️ Light Theme"
      : "🌙 Dark Theme";
});