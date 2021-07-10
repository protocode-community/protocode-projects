/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon or a link*/
const m = document.getElementById("myTopnav");

m.addEventListener("click", (e) => {
  if (e.target.matches(".icon, .fa-bars") && m.className === "topnav") {
    m.className += " responsive";
  } else if (e.target instanceof HTMLAnchorElement) {
    document.querySelector(".active").classList.remove("active");
    e.target.className += " active";
    m.className = "topnav";
  } else {
    m.className = "topnav";
  }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    m.style.top = "0";
  } else {
    m.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}