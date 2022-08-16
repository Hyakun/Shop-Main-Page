const bmenu = document.getElementsByClassName("burgerMenu");
const nav = document.getElementsByClassName("nav");

bmenu[0].addEventListener("click",()=>{
    if(nav[0].classList.contains('open')){
        nav[0].classList.remove('open');
    }else{
        nav[0].classList.add('open');
    }
});