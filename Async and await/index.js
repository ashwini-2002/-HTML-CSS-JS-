async function x() {
   let data =await fetch("https://fakestoreapi.com/products");
   console.log(data);
   let finalData =await data.json();
   console.log(finalData);
   finalData.map((item,index) =>{
    let body =document.body;
    let div=document.createElement("div");
    div.innerHTML +=`
    <div>
    <img src="${item.image}"height="300px width:"200px"/>
    <p>${item.title}</p>
    </div>
    `;
    body.appendChild(div);
   });
}
x();
