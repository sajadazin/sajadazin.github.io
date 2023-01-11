function myFunction() {
    document.getElementById("hide").style.display ="none";
}

function myfunction2() {
    document.getElementById("hide").style.display ="block";
}

function myFunction3() {
    document.getElementById("show").style.display = "block";
}

function myFunction5(x) {

if (x.classList.toggle("change")) {
document.getElementById("hide").style.display="block";
document.getElementById("hide").style.position="absolute";

}
else {
document.getElementById("hide").style.display="none";


}

}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
mybutton.style.display ="block";
}
else {
mybutton.style.display ="none";
}
}

function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop =0;
}

