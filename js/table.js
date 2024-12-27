let input=document.querySelector("input");
let div=document.querySelector("div");
let span=document.querySelector("span");
async function DefaultFn(){
    // Urll
    const url=await fetch('https://jsonplaceholder.typicode.com/albums')
    // Urll
    const myData=await url.json();

    let myKeys=Object.keys(myData[0])
    
    let table="<table border=1 cellpadding=10><tr>"
    myKeys.map((e)=>{
        table+=`<th>${e}</th>`
    })
    table+="</tr>"
    myData.map((e)=>{
        table+=`<tr>
                    <td>${e.userId}</td>
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                </tr>`
    })
    div.innerHTML=table;
}

async function KeyUp(e){
    let table="<table border=1 cellpadding=10><tr>";
    const url=await fetch('https://jsonplaceholder.typicode.com/albums')
    // Urll
    const myData=await url.json();
    const keys=Object.keys(myData[0]);

    keys.map((e)=>{
        table+=`<th>${e}</th>`
    })
    table+="</tr>"
    const myInput=e.target.value;

    const resultData=myData.filter((e1)=>{
        return e1.title.startsWith(myInput) ||  e1.id.toString().startsWith(myInput);
    })
    span.innerHTML=resultData.length;
    
    if(resultData.length>0){
        resultData.map((e)=>{
            table+=`<tr>
                        <td>${e.userId}</td>
                        <td>${e.id}</td>
                        <td>${e.title}</td>
                    </tr>`
        })
        div.innerHTML=table;
    }
    else{
        span.innerHTML='';
        div.innerHTML='No data found'
    }

    
}
window.addEventListener('load',DefaultFn)
input.addEventListener('keyup',KeyUp)









// var a=[31,1,4,5,10,3,7,8,9];
// a.map((e)=>{
//     console.log(e);
// })

// const b=a.filter((e)=>{
//     return e%2!==0;
// })

// const c=a.find((e)=>{
//     return e%2!==0;
// })

// console.log(b);
// console.log(c);
