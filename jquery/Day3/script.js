$(document).ready(function(){
    // $("h1").click(function(){
        // $(this).hide();
        // $(this).remove();
        // $(this).empty();
    // })


    // $("#box").click(function(){
    //     if($("div").hasClass("circle")){
    //         $("div").removeClass("circle")
    //         $("div").addClass("box")
    //     }
    //     else{
    //         $("div").addClass("box")
    //     }
    // })
    // $("#circle").click(function(){
    //     if($("div").hasClass("box")){
    //         $("div").removeClass("box")
    //         $("div").addClass("circle")
    //     }
    //     else{
    //         $("div").addClass("circle")
    //     }
    // })

    // $("#empty").click(function(){
    //     $("div").removeClass("box")
    //     $("div").removeClass("circle")
    // })


    // $("i").click(function(){
    //     if($(this).hasClass("fa fa-home")){
    //         $(this).removeClass("fa fa-home");
    //         $(this).addClass("fa fa-users");
    //     }
    //     else{
    //         $(this).removeClass("fa fa-users");
    //         $(this).addClass("fa fa-home");
    //     }
    // })
    let num=0;
    $("button").click(function(){
        $("p").prepend(`<b>Hello World-${num+=1}<b>`)
        $("b").click(function(){
           $(this).remove()
        })
    })   
})