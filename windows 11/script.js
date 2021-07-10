let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("strtmenu")[0];

// For TaskBar animation
taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom === "50px")
    {
        startmenu.style.bottom = "-500px" 
    }
    else{
        startmenu.style.bottom = "50px"
    }
})