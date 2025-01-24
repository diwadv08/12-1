let h1=document.querySelector("h1");
let div=document.querySelector("div");
let num=Number(h1.innerHTML);

div.addEventListener('mouseenter',()=>{
    setInterval(counter,100);
})

function counter(){
    if(num<=10){
        num+=1;
        h1.innerHTML=num;
    }
    else{
        h1.innerHTML=1;
    }
}

// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset>=400){
//         setInterval(counter,10)
//     }
//     else{
//         h1.innerHTML=1;
//     }

// })

