let a=document.getElementById("dark");
a.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
});
console.log(a);

let b=document.getElementById("ip1");
    b.addEventListener("blur",()=>
    {
        b.value=b.value.toUpperCase();
    });
    console.log(b);
