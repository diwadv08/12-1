function Fun(){
    const pwd=document.querySelector('#pwd').value;
    const button=document.querySelector("button");
    const s1=document.querySelector(".s1");
    const s2=document.querySelector(".s2");
    const s3=document.querySelector(".s3");
    let result=0;

    if(pwd.length>0){

        // First Letter Uppercase
        var first_letter=pwd[0];  //A
        var first_letter_caps=first_letter.toUpperCase();  //A
        if(first_letter===first_letter_caps){
            s1.style.color='green';
            result+=1;
        }
        else{
            s1.style.color='red';
        }
        

        // Length should be more than 10 
        if(pwd.length>10){
           s2.style.color='green';
           result+=1;
        }
        else{
           s2.style.color='red';
        }

        //special characters

        let special_char=0;

        if(pwd.includes('@') || pwd.includes('&') || pwd.includes('$') || pwd.includes('/') ){
            special_char+=1;
        }

        if(special_char>0){
            s3.style.color='green';
            result+=1;
        }
        else{
            s3.style.color='red';
        }
        
        if(result===3){
            button.style.display='inline';
        }
        else{
            button.style.display='none';
        }
    }
    else{
        s1.style.color='red';
        s2.style.color='red';
        s3.style.color='red';
    }
    
}   
