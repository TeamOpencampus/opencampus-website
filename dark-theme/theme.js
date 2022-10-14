var icon = document.getElementById("theme-icon");

icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/sun.png";
    } else{
        icon.src = "assets/moon.png";
    }
}