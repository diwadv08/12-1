let button=document.createElement("button");
let div=document.createElement("div");
button.innerHTML='Hello';
document.body.appendChild(button)
document.body.appendChild(div)


$(document).ready(function(){
    let div=$("div");
    let divStyle={
        background:'red',
        height:'100px',
        width:'100px'
    }
    div.css(divStyle)

    // $("button").click(function(){
    //     $("div").animate({marginLeft:'200px',height:'+=100px',width:'+=100px'},1000)
    //     $("div").animate({marginLeft:'0px',height:'-=100px',width:'-=100px'})
    // })

    // $("button").click(function(){
    //     $("div").animate({width:'toggle'})
    // })

    // $("button").click(function(){
    //     div.animate({width:'200px'},2000)
    //     div.animate({height:'200px'},2000)
    //     div.animate({width:'100px'},2000)
    //     div.animate({height:'100px'},2000)
    // })

    $("button").click(function(){
        div.css({background:'green'}).animate({marginLeft:'400px'},3000).slideUp(2000).slideDown(2000).animate({marginLeft:'0px',marginTop:'100px'},3000)
    })

})