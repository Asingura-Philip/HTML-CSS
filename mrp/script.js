let navScroll = document.querySelector(".navbar")
window.addEventListener("scroll",()=>{ 
    if(window.scrollY >= 50){
        navScroll.style.backgroundColor = "blue";
    }else{
        navScroll.style.backgroundColor = "";
    }
})