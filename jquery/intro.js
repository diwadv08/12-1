$(document).ready(function(){
    $(".click").click(function(){
        alert(this.innerHTML)
    })
    $(".delete-1").click(function(){
        $(this).hide()
    })
    $(".delete-2").click(function(){
        $(this).hide()
    })
    $(".delete-3").click(function(){
        $(this).hide()
    })
    $(".hide").click(function(){
        $("p").hide();
    })
    $(".show").click(function(){
        $("p").show();
    })
    $(".hide_show").click(function(){
        $("p").toggle();
    })
    $("i").click(function(){
        if(this.className=='fa fa-plus'){
            this.className='fa fa-minus'
            $("p").show();
        }
        else{
            this.className='fa fa-plus'
            $("p").hide();
        }
    })
})