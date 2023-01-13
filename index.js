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

const scrollBtn = document.querySelector(".btn");
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

// function topFunction() {
// document.body.scrollTop=0;
// document.documentElement.scrollTop =0;
// }



let dropdown = document.getElementsByClassName("dropdown-btn");
let i ;
for (i=0 ; i <dropdown.length; i++) {
    dropdown[i].addEventListener("click",function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display ==="block") {
            dropdownContent.style.display ="none";
        } else {
            dropdownContent.style.display="block";
        }

    });
}




