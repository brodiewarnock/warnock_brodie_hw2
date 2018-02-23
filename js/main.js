// JavaScript Document
(() => {
console.log("Linked Up");
	
function removeColour(e) {
  //console.log(e);
  if (e.propertyName !== "transform") {
    return;
  } else {
      e.target.classList.remove('on');
    }

  }  

// run this whenever an icon is clicked
function logIcon(e) {
  //debugger;
  //console.log(e);
  const icon = document.querySelector(//`div[data-key="${e.keyCode}"]`); 

  icon.classList.add('on');

}

const icons = Array.from(document.querySelectorAll('.icon'));
icons.forEach(icon => icon.addEventListener('transitionend', removeColour));

  window.addEventListener('icondown', logIcon);
	
}) ();

//Tried adding JavaScript interactivity based off of the drumkit example in class. 
//Was unable to find success adding the intended effect of giving the icons a coloured border when clicked.