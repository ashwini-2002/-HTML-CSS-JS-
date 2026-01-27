sessionStorage.setItem("name","Ashwini");
sessionStorage.setItem("age",22);

sessionStorage.clear();
sessionStorage.removeItem("age");
let name=sessionStorage.getItem("name");
let age=sessionStorage.getItem("age");
document.write(name,age);

