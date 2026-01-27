localStorage.setItem("name","Ashwini");
localStorage.setItem("age",22);

localStorage.clear();
localStorage.removeItem("age");
let name=localStorage.getItem("name");
let age=localStorage.getItem("age");
document.write(name,age);

