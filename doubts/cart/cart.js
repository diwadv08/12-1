let modal_body=document.querySelector(".modal-body");
let product_cart=document.querySelector(".product_cart");
let cart_count=document.querySelector(".cart_count");
let products=[
    {
        id:1,
        name:"Data-1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"300",
        cart_added:0,
        img:"images/0.jpg"
    },
    {
        id:2,
        name:"Data-2",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"600",
        cart_added:0,
        img:"images/1.jpg"
    },
    {
        id:3,
        name:"Data-3",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/2.jpg"
    },
    {
        id:4,
        name:"Data-4",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"1300",
        cart_added:0,
        img:"images/3.jpg"
    },
    {
        id:5,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/4.jpg"
    },
    {
        id:6,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/5.jpg"
    },
    {
        id:7,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/6.jpg"
    },
    {
        id:8,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/7.jpg"
    },
    {
        id:9,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/8.jpg"
    },
    {
        id:10,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/9.jpg"
    },
    {
        id:11,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/10.jpg"
    },
    {
        id:12,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/11.jpg"
    },
    {
        id:13,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/12.jpg"
    },
    {
        id:14,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/13.jpg"
    },
    {
        id:15,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/14.jpg"
    },
    {
        id:16,
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        cart_added:0,
        img:"images/15.jpg"
    },
    
];


function Product_Mapping(){
    let col_3Data='';
    let btnClass,btnText,ratingCss;
    products.map((e,i)=>{
        if(e.cart_added==0){
            btnClass='btn-dark';
            btnText='Add to cart'
        }
        else{
            btnClass='btn-secondary';
            btnText='Already Added'
        }
        if(e.rating>1 && e.rating<=2){
            ratingCss='bg-danger'
        }
        else if(e.rating>2 && e.rating<4){
            ratingCss='bg-warning text-dark';
        }
        else if(e.rating>=4 && e.rating<=5){
            ratingCss='bg-success';
        }
        col_3Data+=`
        <div class="col-lg-3 col-md-6 my-3">
                <div class="card">
                    <img src="${e.img}" alt="">
                    <div class="card-body">
                        <h5>${e.name} <span class='badge ${ratingCss}'>${e.rating}</span></h5>
                        <p>${e.description}</p>
                        <div class="d-flex justify-content-between">
                            <h6>Rs.${e.new_price}</h6>
                            <h6 class="text-secondary"><s>Rs.${e.old_price}</s></h6>
                        </div>
                        <button class="btn ${btnClass} w-100 py-1" onclick='Product_Adding(${e.id})' >${btnText}</button>
                    </div>
                </div>
            </div>
        `
    })
    product_cart.innerHTML=col_3Data;
}


function ModalCart(){
        let cart_items=products.filter((e)=>{
            if(e.cart_added!=0){
                return e;
            }
        })
        let grand_total=0;
        cart_items.map((e)=>{
            grand_total+=Number(e.new_price);
        })
    
        let cart_table;

        let j='';
        let s_no=1;
        if(cart_items.length>0){
            cart_items.map((e,i)=>{
                j+=`<tr>
                    <td>${s_no++}</td>
                    <td>${e.name}</td>
                    <td><img src="${e.img}" alt="" height="40"></td>
                    <td>Rs.${e.new_price}</td>
                <td><i class="fa fa-trash" onclick='DeleteFun(${e.id})'></i></td>
                </tr>`
            })    
    
            cart_table=`<table class="table">
                    <thead class="bg-dark text-light">
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${j}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" align="right">
                                <b>Total Price</b> Rs.${grand_total}
                            </td>
                        </tr>
                    </tfoot>
               </table>`;
                modal_body.innerHTML=cart_table;
        }
        else{
            modal_body.innerHTML='<center>No Data Found</center>';
        }
        cart_count.innerHTML=cart_items.length;
}
       



function Product_Adding(e){
    products[e-1].cart_added=1;
    Product_Mapping();
    ModalCart();
}

function DeleteFun(e){
    products[e-1].cart_added=0;
    Product_Mapping();
    ModalCart();
}

window.addEventListener('load',Product_Mapping)
window.addEventListener('load',ModalCart)