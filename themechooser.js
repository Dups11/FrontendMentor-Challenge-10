const themes = document.querySelectorAll('input[name="switch"]');

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
    }
    if (theme.value == 3) {
      document.body.classList.remove("theme1");
      document.body.classList.remove("theme2");
    }
    document.body.classList.add("theme" + theme.value);
  });
});
