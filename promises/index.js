let job=true;       //true or false
let promises =new Promise((resolve,reject) =>{
    if(job){
        resolve("success");
    }else{
        reject("failure");
    }
})

.then((res)=> console.log(res,"then is exectuted"))
.catch((err)=> console.log(err,"catch is exectuted"))
.finally(()=> console.log("Finally is exectuted"));