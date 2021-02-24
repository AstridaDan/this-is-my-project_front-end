
//Pesaki sapni submit button result
document.getElementById("piesaki-form").onsubmit = function() {
    document.getElementById('thanks-text').style.display = 'block';
    document.getElementById('submit-piesaki').style.display = 'none';
    document.getElementById('small-text').style.display = 'none';  
    document.getElementById('piesaki-form').style.pointerEvents = 'none';
    return false;  
  };
  