window.addEventListener("load", function(){
    const element = document.getElementById("");
    if(window.innerWidth < 1350){
        element.style.transform = "translateX(0)"
    }else{
        element.style.transform = "translateX(0)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth > 1121 & window.innerWidth < 1350){
        element.style.transform = "translateX(-5vh)"
    }else{
        element.style.transform = "translateX(0)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth < 921 & window.innerWidth < 1120){
        element.style.transform = "translateX(-10vh)"
    }else{
        element.style.transform = "translateX(0)"
    }
})
window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth < 920){
        element.style.transform = "translateX(-15vh)"
    }else{
        element.style.transform = "translateX(0)"
    }
})

