window.addEventListener("load", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth > 769){
        element.style.transform = "translateX(80px)"
    }else{
        element.style.transform = "translateX(0)"
    }
})

window.addEventListener("resize", function(){
    const element = document.getElementById("QuadPai");
    if(window.innerWidth > 769){
        element.style.transform = "translateX(80px)"
    }else{
        element.style.transform = "translateX(0)"
    }
})

