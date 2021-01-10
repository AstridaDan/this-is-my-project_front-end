
var mybutton = document.getElementById("scroll");
var footer = document.getElementById("footer");

var st = window.pageYOffset || document.documentElement.scrollTop;

window.onscroll = function() {scrollFunction()}; //Function start on page scroll

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)){
      mybutton.style.position = 'fixed';
    }
    else{ //Button stop before footer
      mybutton.style.position = 'absolute';
      mybutton.style.top = '3220px'
      mybutton.style.zIndex = '99';
    }
  }else {
    mybutton.style.display = "none";
  }
  return scrollFunction();
}
function topFunction() {
  document.body.scrollTop = 0;
  document.body.scrollUp = 0;
  document.documentElement.scrollTop = 0;
}

function getRectTop(el){
  var rect = el.getBoundingClientRect();
  return rect.top;
}

//NAVIGATION HAMBURGER
function navFunction() {
  var nav = document.getElementById("nav-mob");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}