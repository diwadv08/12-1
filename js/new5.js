// const h3="<h1>Hello H3</h1>";
// const h4="<h1>Hello H4</h1>";
// const h5="<h1>Hello H5</h1>";
// document.body.innerHTML+=h3;
// document.body.innerHTML+=h4;
// document.body.innerHTML+=h5;


// const h3=document.createElement('h1');
// let a="background:blue;padding:30px;font-size:50px";
// h3.innerHTML="Hello";
// h3.setAttribute('class','text-success')
// h3.style=a;
// document.body.appendChild(h3);


// const a=document.getElementById("gg");
// const a=document.getElementsByClassName("gg");
// console.log(a[0]);

// const a=document.getElementsByTagName("h1");
// console.log(a[0].innerHTML);
// console.log(a[1].innerHTML);
// console.log(a[2].innerHTML);
// console.log(a[3].innerHTML);
// console.log(a[4].innerHTML);
// console.log(a[5].innerHTML);
// console.log(a[6].innerHTML);


let col_3="";
let myDatas=[
    {
        i:"users",
        h2:"Heading 1",
        p:"Paragraph 1",
        color:"bg-danger text-white"
    },
    {
        i:"user",
        h2:"Heading 2",
        p:"Paragraph 2",
        color:"bg-success text-white"
    },
    {
        i:"circle",
        h2:"Heading 3",
        p:"Paragraph 3",
        color:"bg-light"
    },
    {
        i:"square",
        h2:"Heading 4",
        p:"Paragraph 4",
        color:"bg-dark text-white"
    },
]


myDatas.map((e)=>{
    col_3+=`<div class="col-3">
        <div class="card p-4 ${e.color}">
          <i class="fa fa-${e.i}"></i>
          <h3>${e.h2}</h3>
          <p>${e.p}</p>
        </div>
      </div>`
})




const cards=`<div class="container-fluid">
    <div class="row py-5 text-center">
        ${col_3}
    </div>
  </div>`

  document.body.innerHTML=cards;