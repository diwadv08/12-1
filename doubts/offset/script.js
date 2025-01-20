let header=document.querySelector(".header");
let atag=document.querySelectorAll(".header a");

window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset>100){
        header.style.background='green';
        header.style.justifyContent='center';
        atag[0].style.background='black';
        atag[0].style.color='white';

    }
    else{
        header.style.justifyContent='start';
        header.style.background='transparent';
    }
})
