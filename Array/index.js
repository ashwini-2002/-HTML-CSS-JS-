let a=[1, 2, 3, 4, 5];

let b=a.push(6, "hello");
console.log(a);

let c=a.pop();
console.log(a);

let d=a.unshift("hiiii",0);
console.log(a);

let e=a.shift();
console.log(a);

let f=a.map((item,index) => item*2);
console.log(f);

let ff=a.forEach((item,index) =>item*2);
console.log(ff);

let movies=["ironman","batman","superman","spiderman"];
let fetchingData =movies.map((item,index) => console.log(item));

let removeData =movies.filter(
    (item,index) =>item!=="ironman" && item!=="batman"
);
console.log(removeData);

let x=[2,3,4,5,6];
let y=x.reduce((f,s) =>{
    return f+s;
});
console.log(y);

for(const key in movies){
    console.log(key);
}
for(const key of movies){
    console.log(key);
}

let g=movies.forEach((item,index) =>{
    console.log(`${index}: ${item}`);
});

let h=a.reverse();
console.log(a);
 
let i=a.join();
console.log(i,typeof i);

let aa=[1,2,3];
let j=aa.every((item,index)=>item >=0);
console.log(j)

let k=aa.some((item,index)=> item >=2);
console.log(k);

let xx=prompt("enter your word");
let yy=xx.split("").reverse().join("");
if(xx ===yy){
    console.log("palindrome")
}
console.log.apply(yy);