$(document).ready(function(){
    $("i").css({
        position:'relative',
        left:'-23px',
        fontSize:'13px'
    })

    $("i").click(function(){
        if($(this).attr('class').includes('slash')){
            $(this).attr('class','fa fa-eye')
            $("input").attr('type','text')
        }
        else{
            $(this).attr('class','fa fa-eye-slash')
            $("input").attr('type','password')
        }
    })
})