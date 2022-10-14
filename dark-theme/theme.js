function darkmode(){
    const classDarkTheme = "dark-theme";
    const bodyElement = document.querySelector("body");
    const toggleBtn = document.getElementById("theme-icon");

    const handleOnClickToggle = () => {
        const isDarkModeOn = bodyElement.classList.length > 0;

        if (isDarkModeOn) {
            bodyElement.classList.remove(classDarkTheme);
            toggleBtn.src = "../public/assets/moon.png";
            return;
          }
      
          bodyElement.classList.add(classDarkTheme);
          toggleBtn.src = "../public/assets/sun.png";
        };

        toggleBtn.addEventListener("click", handleOnClickToggle);
    }

    darkmode();