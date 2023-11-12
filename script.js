
/* ==================animated typing effect in hero section========================= */
// add the typed js "    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> " inside the head tag.
document.addEventListener("DOMContentLoaded", function() {
    let options = {
      strings: [
        " Quality Meets Flavor!",
        " Quality is our Recipe",
        " Good Food Reigns Supreme!",
        " Our Recipe Speaks Excellence!"
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      backDelay: 2000, // delay after typing and before backspacing
      startDelay: 500, // delay before typing starts
      loop: true // loop the animation
    };

    let typed = new Typed(".typed", options);
  });

/*--------------loading screen animation--------------- */
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*------------------------------------------------------- */