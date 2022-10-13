function darkTheme() {
  const classDarkTheme = "dark-theme";
  const bodyElement = document.querySelector("body");
  const toggleBtn = document.getElementById("dark-theme");

  const handleOnClickToggle = () => {
    const isDarkModeOn = bodyElement.classList.length > 0;

    if (isDarkModeOn) {
      bodyElement.classList.remove(classDarkTheme);
      toggleBtn.classList.remove("on");
      toggleBtn.classList.add("off");
      return;
    }

    bodyElement.classList.add(classDarkTheme);
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
  };

  toggleBtn.addEventListener("click", handleOnClickToggle);
}

darkTheme();
