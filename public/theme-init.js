// Run before first paint. Storage may be disabled; system preference still works.
(() => {
  let theme;
  try { theme = localStorage.getItem("theme"); } catch { /* Optional persistence. */ }
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
})();
