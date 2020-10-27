// Make the nav links show their corresponding sections
const heroSection = getElem('hero');
const aboutSection = getElem('about');
const portfolioSection = getElem('portfolio');
const contactSection = getElem('contact');

const sections = document.querySelectorAll('.page-section');

console.log(sections);

function showScreen() {
  console.log('Show Screen');
}

function showHome() {
  hideAll();
  heroSection.style.display = 'flex';
}

function showAbout() {
  hideAll();
  aboutSection.style.display = 'flex';
}

function showPortfolio() {
  hideAll();
  portfolioSection.style.display = 'flex';
}

function showContact() {
  hideAll();
  contactSection.style.display = 'flex';
}

function hideAll() {
  heroSection.style.display = 'none';
  aboutSection.style.display = 'none';
  portfolioSection.style.display = 'none';
  contactSection.style.display = 'none';
}

//Function to quickly create variables for elements in the DOM
function getElem(elemID) {
  return document.getElementById(elemID);
}
