var x=0.09;
console.log("start");
function parent() {
    let a=10;
    let b=20;
    console.log(b);
    function child(){
    console.log(a);
    console.log(x);
}
   return child;
}
 parent()();




 // output: we need to debug in sources 