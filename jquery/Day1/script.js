$(document).ready(function(){
   $("p").hide();
   $("button").click(function(){
    // let styleCss={
    //     background:'red',
    //     padding:'8px 30px',
    //     border:'none',
    //     borderRadius:'50px'
    // }

    // $(this).css(styleCss)
    // $(this).html('Clicked')
    // this.innerHTML='Clicked'
    // this.innerText='Clicked'
    // alert($(this).html())
    // alert($(this).text())
    // $("p").toggle();
   })


    //    $("button").on('click',function(){
    //         alert('Clicked')
    //    })

    //   $("button").on({
    //     click:function(){
    //         alert('Clicked-2')
    //     }
    //   })

    let boxCss={
        height:'100px',
        width:'100px',
        background:'red',
        display:'none'
    }
    $(".box").css(boxCss)
    $(".show").click(function(){
        // $(".box").fadeOut()
        // $(".box").fadeIn()
        // $(".box").fadeToggle()
        // $(".box").fadeTo(500,0.1)

        // $(".box").slideDown(100)
        // $(".box").slideUp(100)
        // $(".box").slideToggle(5000)
    })
    $(".stop").click(function(){
        $(".box").stop();
    })
    $("input").keyup(function(){
        // alert($(this).val())
        // alert(this.value)
    })

    $("select").change(function(){
        alert($(this).val())
    })



    //    $("button").on('mouseover mouseout',function(e){
    //        if(e.type=='mouseover'){
    //         alert("Mouse Over")
    //        }
    //        else if(e.type=='mouseout'){
    //         alert("Mouse Out")
    //        }
    //    })

    //   $("button").on({
    //     click:function(){
    //         console.log('Clicked-2')
    //     },
    //     dblclick:function(){
    //         console.log('Dbl Clicked-2')
    //     },
    //     mouseover:function(){
    //         console.log('Mouse Over')
    //     }
    //   })

})