    // let res=fetch('https://jsonplaceholder.typicode.com/posts');
    // res.then((url)=>{
    //     return url.json()
    // }).then((j)=>{
    //     console.log(j);
    // })
    let div=document.querySelector("div");
    
    async function MyFun(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users');
        let datas=await res.json();   
        datas.map((e)=>{
            div.innerHTML+="<br>"+e.name;
        })
             
    }
    MyFun()


    // let a=[2,3,4];
    // let c=a.map((e)=>{
    //     return e*2
    // });
    // console.log(c);
    

   
    // })
    // for(let i=0;i<a.length;i++){
    //     if(a[i]%2==0){
    //         document.write(a[i]+'-even ')
    //     }
    //     else{
    //         document.write(a[i]+'-odd ')
    //     }
    // }

    
   