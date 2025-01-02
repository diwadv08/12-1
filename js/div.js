var row=document.createElement("div");
var col61=document.createElement("div");
var col62=document.createElement("div");
container.setAttribute("class","container");
row.setAttribute("class","row align-items-center");
col61.setAttribute("class","col-6 text-center");
col62.setAttribute("class","col-6");
col61.innerHTML="<h1>hello-1</h1>";
col62.innerHTML="<img src='images/0.jpg' width='100%'>";
row.appendChild(col61)
row.appendChild(col62)
container.appendChild(row)