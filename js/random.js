



function getItem(){
   var max=20;
    var min=1;
    var index=Math.random() * (max - min) + min;
    index=index |0;
    console.log(index);
    document.getElementById("shuffle").innerHTML = '<div class="content-wrap caso" id='+index.toString()+'>  '+ document.getElementById(index.toString()).innerHTML+'	</div>';

}

// function off(){
// document.getElementById("shuffle").innerHTML.onclick =  document.getElementById("0").style.display = "none";
// }
