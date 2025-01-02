let links=["Home","About","Contact","Admin"];
let myLinks="";
// Header
links.map((e)=>{
    myLinks+=`<li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">${e}</a>
      </li>`
})
let images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

let crsItems="";
let indicators="";


//Carousel
images.map((e,i)=>{
    if(i==0){
        indicators+=`<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>`

        crsItems+=`<div class="carousel-item active">
        <img src="images/${e}" class="d-block w-100" alt="...">
      </div>`
    }
    else{
         indicators+=`<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
        crsItems+=`<div class="carousel-item">
        <img src="images/${e}" class="d-block w-100" alt="...">
      </div>`
    }
    
})
// Indicators





console.log(myLinks);

var header=`<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
     
     ${myLinks}
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>`;


var carousel=`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    ${indicators}
  </ol>
  <div class="carousel-inner">
    ${crsItems}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`

document.body.innerHTML=header;
document.body.innerHTML+=carousel;