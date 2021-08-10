let colorRed = document.getElementById("colorRed");
let colorGreen = document.getElementById("colorGreen");
let colorBlue = document.getElementById("colorBlue");
let buttoncolorchange = document.getElementById("buttoncolorchange");
let color = null;


buttoncolorchange.addEventListener("click",function()
{
    console.log(color);
    document.body.style.backgroundColor = color;
//da se smeni bojata vo zavisnost od koj radiobutton e selektiran
})

function registerColor(e)
{
    color = e.target.value;
}


colorRed.addEventListener("click",registerColor)
colorGreen.addEventListener("click",registerColor)
colorBlue.addEventListener("click",registerColor)
