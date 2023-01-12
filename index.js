function myFunction5(x) {

if (x.classList.toggle("change")) {

document.getElementById("mySidenav").style.width="270px";

}
else {
document.getElementById("mySidenav").style.width="0";


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

