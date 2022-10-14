var icon = document.getElementById("theme-icon");

icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "../public/assets/sun.png";
    } else{
        icon.src = "../public/assets/moon.png";
    }
}