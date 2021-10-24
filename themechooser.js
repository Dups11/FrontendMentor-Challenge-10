const themes = document.querySelectorAll('input[name="switch"]');
const declaration = document.styleSheets[0].cssRules[11].style;
const styleSheets = document.styleSheets;
// console.log(themes);

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    // theme switcher classList
    if (theme.value == 1) {
      document.body.classList.remove("theme2");
      document.body.classList.remove("theme3");
    }
    if (theme.value == 2) {
      document.body.classList.remove("theme1");
      document.body.classList.remove("theme3");
      document.body.classList.add("theme2");
    }
    if (theme.value == 3) {
      document.body.classList.remove("theme1");
      document.body.classList.remove("theme2");
      document.body.classList.add("theme3");
    }
  });
});
