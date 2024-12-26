let input=document.querySelector("input");
async function DefaultFn(){
    // Urll
    const url=await fetch('https://jsonplaceholder.typicode.com/albums')
    // Urll
    const myData=await url.json();

    let myKeys=Object.keys(myData[0])
    // 
    let div=document.querySelector("div");
    console.log(input.value);
    // 
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


window.addEventListener('load',DefaultFn)