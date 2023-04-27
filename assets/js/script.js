window.addEventListener("load", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth >  1350){
        element.style.transform = "translateX(0)"
    }
})

window.addEventListener("load", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth <  1350 & window.innerWidth >  1181 ){
        element.style.transform = "translateX(-5vh)"
    }
})

window.addEventListener("load", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth < 1180 & window.innerWidth > 971){
        element.style.transform = "translateX(-10vh)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth >  1350){
        element.style.transform = "translateX(0)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth <  1350 & window.innerWidth >  1181 ){
        element.style.transform = "translateX(-5vh)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth < 1180 & window.innerWidth > 971){
        element.style.transform = "translateX(-10vh)"
    }
})



