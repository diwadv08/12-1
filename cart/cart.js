const cart_row=document.querySelector(".cart_row");
const cart_count=document.querySelector("#cart_count");

const products=[
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
    },
    
]
let final_result='';
let class1='';
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
    final_result+=`
    <div class='col-4 my-3'>
        <div class='card'>
            <img src='../images/${index}.jpg' height='200px'>
            <div class='card-body'>   
                <h5>${value.name}</h5>
                <div class='d-flex align-items-center'>
                    <h6 class='mr-3 text-secondary strike'>Rs.${value.old_price}</h6>
                    <h5>Rs.${value.new_price}</h5>
                </div>
                <button class='btn btn-${class1} btn-sm'>${value.rating}</button>
                <p>${value.description}</p>
                <button class='btn btn-dark btn-block'>Add to cart</button>
            </div>
        </div>
    </div>`
    
})
const cart_result=[];
cart_count.innerHTML=cart_result.length;

const modal_div=document.querySelector(".modal-content");
    if(cart_result.length>0){
        modal_div.innerHTML=`<table class="table border table-striped">
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Apple</td>
                        <td><img src="../images/1.jpg" height="40px"></td>
                        <td>Rs.500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Orange</td>
                        <td><img src="../images/2.jpg" height="40px"></td>
                        <td>Rs.300</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Grapes</td>
                        <td><img src="../images/3.jpg" height="40px"></td>
                        <td>Rs.400</td>
                    </tr>
                </table>`;
    }
    else{
        modal_div.innerHTML=`<h1><i class="fa fa-face-sad-tear"></i></h1>
        <p>No cart Data</p>`;

    }
        


cart_row.innerHTML=final_result;