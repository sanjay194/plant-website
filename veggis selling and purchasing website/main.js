let menu=document.querySelector(".menu-bar");
let navlinks=document.querySelector(".navbar-text");

menu.addEventListener('click',()=>{
    navlinks.classList.toggle("display-nav");
})