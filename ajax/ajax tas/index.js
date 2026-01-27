function load(){
    let request =new XMLHttpRequest();
    request.open("GET", "./index.text");
    request.send();
    request.onreadystatechange=()=>{
        let data =document.getElementById("p1");
        data.innerHTML=request.responseText;
    };
}