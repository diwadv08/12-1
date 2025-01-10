const cart_row=document.querySelector(".cart_row");
const cart_count=document.querySelector("#cart_count");
const modal_div=document.querySelector(".modal-content");

let products=[
    {
        name:"Data-1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"300",
        cart_added:1,
        img:"0"
    },
    {
        name:"Data-2",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"600",
        cart_added:1,
        img:"1"
    },
    {
        name:"Data-3",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:1,
        img:"2"
    },
    {
        name:"Data-4",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"1300",
        cart_added:1,
        img:"3"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"4"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"5"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"6"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"7"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"8"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"9"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"10"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"11"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"12"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"13"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"14"
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"15"
    },
    
]

    let class1='';
    let final_result='';

    function producMap(){
        products.map((value,index)=>{
            if(value.rating>1 && value.rating<2 ){
                class1='danger'
            }
            else if(value.rating>2 && value.rating<4){
                class1='warning'
            }
            else if(value.rating>=4){
                class1='success'
            }
            let btntext="Add to cart";
            let btnClass="dark";
            if(value.cart_added>0){
                btntext="Already Added";
                btnClass='secondary disabled';
            }
            final_result+=`
            <div class='col-lg-4 col-md-6 my-3'>
                <div class='card'>
                    <img src='../images/${value.img}.jpg' height='200px'>
                    <div class='card-body'>   
                        <h5>${value.name}</h5>
                        <div class='d-flex align-items-center'>
                            <h6 class='mr-3 text-secondary strike'>Rs.${value.old_price}</h6>
                            <h5>Rs.${value.new_price}</h5>
                        </div>
                        <button class='btn btn-${class1} btn-sm'>${value.rating}</button>
                        <p>${value.description}</p>
                        <button class='btn btn-${btnClass} btn-block'>${btntext}</button>
                    </div>
                </div>
            </div>`
            
        })
    }



    let cart_result=products.filter((e)=>{
        return e.cart_added>0;
    });


    function DefaultValue(){
        let myData='',count=1;
        cart_count.innerHTML=cart_result.length;
            if(cart_result.length>0){
                myData=`<table class="table border table-striped">
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>`;
                cart_result.map((e)=>{
                    myData+=`<tr>
                                <td>${count++}</td>
                                <td>${e.name}</td>
                                <td><img src="../images/${e.img}.jpg" height="40px"></td>
                                <td>Rs.${e.new_price}</td>
                                <td><i class='fa fa-trash' onclick='DeleteFun(${e.img})' data-dismiss='modal'></i></td>
                            </tr>`
                })
                myData+=`</table>`;

                modal_div.innerHTML=myData;
            }
            else{
                modal_div.innerHTML=`<h1><i class="fa fa-face-sad-tear"></i></h1>
                <p>No cart Data</p>`;
            }
        cart_row.innerHTML=final_result;
    }

   

    window.addEventListener('load',producMap())

    function DeleteFun(e){
        products=products.map((data)=>{
            if(e==data.img){
                data.cart_added=0;
            }
            return data;
        })

        console.log(products);
        
        cart_result=cart_result.filter((product)=>{
            return e!=product.img;
        })
        producMap()
        DefaultValue()
    }

    window.addEventListener('load',DefaultValue())