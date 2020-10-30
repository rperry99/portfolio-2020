// Make the nav links show their corresponding sections
const heroSection = getElem('hero');
const aboutSection = getElem('about');
const portfolioSection = getElem('portfolio');
const contactSection = getElem('contact');

const sections = document.querySelectorAll('.page-section');

function showScreen() {
  console.log('Show Screen');
}

function showHome() {
  hideAll();
  heroSection.style.display = 'flex';
  toggleNavClass();
}

function showAbout() {
  hideAll();
  aboutSection.style.display = 'flex';
  toggleNavClass();
}

function showPortfolio() {
  hideAll();
  portfolioSection.style.display = 'flex';
  toggleNavClass();
}

function showContact() {
  hideAll();
  contactSection.style.display = 'flex';
  toggleNavClass();
}

function hideAll() {
  heroSection.style.display = 'none';
  aboutSection.style.display = 'none';
  portfolioSection.style.display = 'none';
  contactSection.style.display = 'none';
}

// Hamburger button
const hamburger = getElem('hamburgerToggle');
const nav = getElem('nav');

function toggleNavClass() {
  if(window.innerWidth <= 426) {
    nav.classList.toggle('mobile-nav-active')
  } else {
    return;
  }
}

hamburger.addEventListener('click', () => {
  toggleNavClass();
})

//Function to quickly create variables for elements in the DOM
function getElem(elemID) {
  return document.getElementById(elemID);
}
