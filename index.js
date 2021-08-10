const buttoncolorchange = document.getElementById("buttoncolorchange");
const radiobuttons = document.querySelectorAll('input[name="colors"]');

buttoncolorchange.addEventListener("click",function()
{
    let color = null;
    for (const radiobtn of radiobuttons) 
    {
        if (radiobtn.checked)
        {
            color = radiobtn.value;
            break;
        }
    }
    document.body.style.backgroundColor = color;
})

