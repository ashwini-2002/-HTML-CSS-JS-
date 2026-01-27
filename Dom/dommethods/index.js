let a=document.getElementById("btn1");
a.style.color="red";
a.style.backgroundColor="black";
console.log(a);

let b=document.getElementsByClassName("sp1");
for(let i=0;i<b.length;i++){
b[i].style.color="blue";
}
console.log(b);


let c=document.getElementsByTagName("p");
for(let i=0;i<c.length;i++){
c[i].style.color="red";
}
console.log(c);

let d=document.querySelector("sp1");
console.log(d);

let e=document.querySelectorAll("sp1");
console.log(e);