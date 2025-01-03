


let s=[120,40,10];
let num=[0,0,0];

let counter_div=`<div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="d-flex">
              <h2><span>${num[0]}</span> <sup>+</sup></h2>
              <h2>Digital Products</h2>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex">
              <h2><span>${num[1]}</span> <sup>+</sup></h2>
              <h2>Digital Products</h2>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex">
              <h2><span>${num[2]}</span> <sup>+</sup></h2>
              <h2>Digital Products</h2>
            </div>
          </div>
        </div>
      </div>
    </div>`

   



    document.body.innerHTML+=counter_div;

    let spantag=document.querySelectorAll("span");
    function timer_s1(){
        if(s[0]>num[0]){
            num[0]+=1;
            spantag[0].innerHTML=num[0];
        }
    }
    
    function timer_s2(){
        if(s[1]>num[1]){
            num[1]+=1;
            spantag[1].innerHTML=num[1];
        }
    }
    function timer_s3(){
        if(s[2]>num[2]){
            num[2]+=1;
            spantag[2].innerHTML=num[2];
        }
    }
    setInterval(timer_s1,0)
    setInterval(timer_s2,10)
    setInterval(timer_s3,30)

   