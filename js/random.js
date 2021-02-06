var shuffle = document.getElementByClassName(".content-wrap");
var arr = getElementById ("#1","#2","#3");


function getItem(){
    document.getElementById("shuffle").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}
