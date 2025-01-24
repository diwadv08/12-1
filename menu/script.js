let menu_items=['Homes','About','Contact','Email'];
let menu_anchor='';

let right_content=document.querySelectorAll(".right_content")


menu_items.map((e,i)=>{
    if(i==0){
        menu_anchor+=`<a class="list-group-item active" onclick='setActive(this)' id='${i}'>${e}</a>`;
    }
    else{
        menu_anchor+=`<a class="list-group-item" onclick='setActive(this)' id='${i}'>${e}</a>`;
    }
 
})

let side_menu=document.querySelector(".side_menu_nav");
side_menu.innerHTML=`<div class="list-group">
                           ${menu_anchor}
                        </div>`



function setActive(e){
    let showActive=document.querySelector(".list-group .active");
    let showActiveDiv=document.querySelector(".row .right_active");
    showActiveDiv.className='col-9 right_content';
    right_content[e.id].className='col-9 right_content right_active'
    showActive.className='list-group-item';
    e.className='list-group-item active';

}