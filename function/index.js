//ananomous function

// function(){
//     console.log("i am ananomous fumction")
// }()

//named function

function india(){
        console.log("i am named fumction")
     }
     india();
     

//IIF
(
function india(){
    console.log("i am  function")
 })
 india();

 //Function with expression

 const karnataka = (function (){
    console.log(" function with expression")
 })
 ();

//currying function

function mul(a){
    return function(b){
        return a*b;
    console.log("i am named fumction")
 }
};
console.log(mul(2)(3));

//Arror function

const arr =() =>{
    console.log("i am arrow")
};
arr ();