//Set the height of the hero section
const hero = getElem('hero');
hero.style.height = window.innerHeight;

//Function to quickly create variables for elements in the DOM
function getElem(elemID) {
  return document.getElementById(elemID);
}
