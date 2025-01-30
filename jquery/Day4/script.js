$(document).ready(function(){
   let delete1=$(".delete");
   let edit=$(".edit");
   let view=$(".view");
   let tr=$("tr");

//    console.log(tr);
//    console.log(view);
   
    for(let i=0;i<delete1.length;i++){
        delete1[i].id="delete-"+(i+1)
    }
   for(let i=0;i<edit.length;i++){
        edit[i].id="edit-"+(i+1)
    }
    for(let i=0;i<view.length;i++){
        view[i].id="view-"+(i+1)
   }
    for(let i=1;i<tr.length;i++){
       tr[i].id="tr-"+(i)
    }
    delete1.click(function(){
        let b=$(this).attr('id');
        let b_arr=b.split("-");
        let num=b_arr[1];
        $("#tr-"+num).remove();
    })
   
})


// let a="Edit-5"
// let b=a.split("-")
// console.log(b[1]);
