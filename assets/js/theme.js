
//CHANGING DISPLAY FOR MAP
//Riga
function showOtherRiga(){
  document.getElementById('rigaEdiens').style.display = 'block'; 
  document.getElementById('rigaFood').style.display = 'block';
  document.getElementById('JelgavaFood').style.display = 'none';
  document.getElementById('ogreEdiens').style.display = 'none';
  document.getElementById('jelgavaEdiens').style.display = 'none';
  document.getElementById('OgreFood').style.display = 'none';
  document.getElementById('defaultMap').style.display = 'none';
  document.getElementById('overlay').style.pointerEvents = 'auto';
  document.getElementsByTagName('footer').style.display = 'none';
};

//Jelgava
function showOtherJelgava(){
  document.getElementById('jelgavaEdiens').style.display = 'block';
  document.getElementById('JelgavaFood').style.display = 'block';
  document.getElementById('rigaEdiens').style.display = 'none';
  document.getElementById('ogreEdiens').style.display = 'none';
  document.getElementById('rigaFood').style.display = 'none';
  document.getElementById('OgreFood').style.display = 'none';
  document.getElementById('defaultMap').style.display = 'none';
  document.getElementById('overlay').style.pointerEvents = 'auto'; 
};

//Ogre
function showOtherOgre(){
  document.getElementById('ogreEdiens').style.display = 'block';
  document.getElementById('OgreFood').style.display = 'block';
  document.getElementById('rigaEdiens').style.display = 'none';
  document.getElementById('jelgavaEdiens').style.display = 'none';
  document.getElementById('rigaFood').style.display = 'none';
  document.getElementById('JelgavaFood').style.display = 'none';
  document.getElementById('defaultMap').style.display = 'none';
  document.getElementById('overlay').style.pointerEvents = 'auto';
};

function showHideOther(){
  if (document.getElementById('drop_down').value == 'riga' && document.getElementById('drop_down2').value == 'ediens') {
    showOtherRiga();   
  }
  else if (document.getElementById('drop_down').value == 'jelgava' && document.getElementById('drop_down2').value == 'ediens') {
    showOtherJelgava();   
  } 
  else if (document.getElementById('drop_down').value == 'ogre' && document.getElementById('drop_down2').value == 'ediens') {
    showOtherOgre();   
  }
};

function openNav() { 
  document.getElementById( 
      "myNav").style.height = "100%"; 
} ;

function closeNav() { 
  document.getElementById( 
      "myNav").style.height = "0"; 
} ;

var socialFloat = document.querySelector('#social-float');
var footer = document.querySelector('#footer');

function checkOffset() {
function getRectTop(el){
  var rect = el.getBoundingClientRect();
  return rect.top;
}

if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
  socialFloat.style.position = 'absolute';
if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
  socialFloat.style.position = 'fixed'; // restore when you scroll up
}

document.addEventListener("scroll", function(){
checkOffset();
});

//SCROLL TO THE TOP

//Get the button:
 mybutton = document.getElementById("social-float");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  
 // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}