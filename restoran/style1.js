let switchmode = document.getElementById("switchmode");

switchmode.onclick = function (){
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href")=="style.css"){
        theme.href = "dark.css";
    } else {
        theme.href = "style.css";
    }
}