//Gold gallery
var parentTablet = document.getElementById('images-tablet');
var parent = document.getElementById('images'),
imagePath = '../assets/img/gallery/overlay.jpg',
img;

var x = window.matchMedia("(max-width: 769px)")
mediaFunction(x) // Call listener function at run time
x.addListener(mediaFunction) // Attach listener function on state

for (let i = 1; i <= 20; i++) {
  img = new Image();
  img.src = imagePath;
  parent.appendChild(img);
//Numbers
  var param = document.createElement('p');
  var nr = document.createTextNode(i);
  param.appendChild(nr);
  var elementNr = document.getElementById('numbers');
  elementNr.appendChild(param);
};
for (let i = 1; i <= 99; i++) {
  img = new Image();
  img.src = imagePath;
  parentTablet.appendChild(img);
//Numbers
  var param = document.createElement('p');
  var nr = document.createTextNode(i);
  param.appendChild(nr);
  var elementNrTablet = document.getElementById('numbers-tablet');
  elementNrTablet.appendChild(param);
};

function mediaFunction(x){
  if (x.matches) { // If media query matches
    parentTablet.style.display = 'none';
    document.getElementById('numbers-tablet').style.display = 'none';
    parent.style.display = 'grid';
    document.getElementById('numbers').style.display = 'grid';  
  } else {
    parent.style.display = 'none';
    document.getElementById('numbers').style.display = 'none';
    parentTablet.style.display = 'grid';
    document.getElementById('numbers-tablet').style.display = 'grid';
  }
}


//Show more button
var a=0;
var moreBtn = document.getElementById('more');
var lessBtn = document.getElementById('less');
var footerMore = document.querySelectorAll('.stasti-f');
var stastiMore = document.querySelectorAll('.bottom-stasti');

var x2 = window.matchMedia("(max-width: 740px)");
var x3 = window.matchMedia("(max-width: 715px)");
var x4 = window.matchMedia("(max-width: 685px)");
var x5 = window.matchMedia("(max-width: 620px)");
var x6 = window.matchMedia("(max-width: 605px)");
var x7 = window.matchMedia("(max-width: 560px)");
var x8 = window.matchMedia("(max-width: 510px)");
var x9 = window.matchMedia("(max-width: 485px)");
var x10 = window.matchMedia("(max-width: 450px)");
var x11 = window.matchMedia("(max-width: 415px)");
var x12 = window.matchMedia("(max-width: 400px)");
var x13 = window.matchMedia("(max-width: 390px)");
var x14 = window.matchMedia("(max-width: 360px)");
var x15 = window.matchMedia("(max-width: 321px)");

function showMoreLess(){
  
  if(!a){
    parentTablet.style.display = 'none';
    document.getElementById('numbers-tablet').style.display = 'none';
    parent.style.display = 'grid';
    document.getElementById('numbers').style.display = 'grid'; 
    moreBtn.style.display = 'block';
    lessBtn.style.display = 'none';

    if (x.matches){
      footerMore[0].style.top = '3400px';
      stastiMore[0].style.marginTop = '1350px';
      if (x4.matches){
        stastiMore[0].style.marginTop = '1250px';
        if (x5.matches){
          stastiMore[0].style.marginTop = '1170px';
          if (x7.matches){
            stastiMore[0].style.marginTop = '1150px';
            if (x8.matches){
              stastiMore[0].style.marginTop = '2750px';
              footerMore[0].style.top = '4800px';
              if (x9.matches){
                stastiMore[0].style.marginTop = '2600px';
                footerMore[0].style.top = '4650px';
                if (x10.matches){
                  stastiMore[0].style.marginTop = '2480px';
                  if (x11.matches){
                    stastiMore[0].style.marginTop = '2280px';
                    footerMore[0].style.top = '4350px';
                    if (x13.matches){
                      stastiMore[0].style.marginTop = '2180px';
                      if (x14.matches){
                        stastiMore[0].style.marginTop = '2000px';
                        footerMore[0].style.top = '4000px';
                        if (x14.matches){
                          stastiMore[0].style.marginTop = '1850px';
                          footerMore[0].style.top = '3800px';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    }
    
    a=1;
  }else{
    parent.style.display = 'none';
    document.getElementById('numbers').style.display = 'none';
    parentTablet.style.display = 'grid';
    document.getElementById('numbers-tablet').style.display = 'grid';
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'block'; 
    
    if (x.matches){
      footerMore[0].style.top = '7100px';
      stastiMore[0].style.marginTop = '5100px';
      if (x2.matches){
        stastiMore[0].style.marginTop = '4800px';
        if (x3.matches){
          stastiMore[0].style.marginTop = '4650px';
          footerMore[0].style.top = '6700px';
          if (x4.matches){
            stastiMore[0].style.marginTop = '4400px';
            footerMore[0].style.top = '6400px';
            if (x5.matches){
              stastiMore[0].style.marginTop = '4050px';
              footerMore[0].style.top = '6100px';
              if (x6.matches){
                stastiMore[0].style.marginTop = '4000px';
                footerMore[0].style.top = '6000px';
                if (x7.matches){
                  stastiMore[0].style.marginTop = '3800px';
                  footerMore[0].style.top = '5800px';
                  if (x8.matches){
                    stastiMore[0].style.marginTop = '12400px';
                    footerMore[0].style.top = '14400px';
                    if (x9.matches){
                      stastiMore[0].style.marginTop = '11650px';
                      footerMore[0].style.top = '13650px';
                      if (x10.matches){
                        stastiMore[0].style.marginTop = '10900px';
                        footerMore[0].style.top = '13000px';
                        if (x11.matches){
                          stastiMore[0].style.marginTop = '9990px';
                          footerMore[0].style.top = '12050px';
                          if (x12.matches){
                            stastiMore[0].style.marginTop = '9620px';
                            footerMore[0].style.top = '11620px';
                            if (x13.matches){
                              stastiMore[0].style.marginTop = '9400px';
                              footerMore[0].style.top = '11400px';
                              if (x14.matches){
                                stastiMore[0].style.marginTop = '8650px';
                                footerMore[0].style.top = '10650px';
                                if (x15.matches){
                                  stastiMore[0].style.marginTop = '7700px';
                                  footerMore[0].style.top = '9700px';
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    a=0;
  }
}


//Name hover
var galleryImg = document.querySelectorAll('.gallery-img');
var galleryName = document.querySelectorAll('.gallery-names');
for (let i = 0; i <= galleryImg.length; i++) {
galleryImg[i].addEventListener('mouseover', function() {
  galleryName[i].style.visibility = 'visible';
});
galleryImg[i].addEventListener('mouseout', function() {
  galleryName[i].style.visibility = 'hidden';
});
};

