const div=document.querySelector("div");
div.style.height='100px';
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>=30){
        div.style.background='blue';
        div.style.color='red';
    }
    else{
        div.style.background='transparent';
        div.style.color='black';
    }
})