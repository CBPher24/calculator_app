const blueT = document.getElementById("blue");
const whiteT = document.getElementById("white");
const purpleT = document.getElementById("purple");
const target = document.querySelectorAll("link")[2];

blueT.addEventListener("click",blueThemeChange)
whiteT.addEventListener("click",whiteThemeChange)
purpleT.addEventListener("click",purpleThemeChange)

function blueThemeChange() {
    target.setAttribute("href", "./styling/blue.css")
}

function whiteThemeChange() {
    target.setAttribute("href", "./styling/white.css")
}

function purpleThemeChange() {
    target.setAttribute("href", "./styling/purple.css")
}