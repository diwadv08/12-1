const div=document.querySelector("div");
div.style.height='100px';
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>=30){
        div.style.background='blue';
    }
    else{
        div.style.background='transparent';
    }
})