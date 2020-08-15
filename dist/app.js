//Set the height of the hero section
const hero = getElem('hero');
hero.style.height = window.innerHeight;

//Function to quickly create variables for elements in the DOM
function getElem(elemID) {
  return document.getElementById(elemID);
}

// Activate send email button
const nameEl = getElem('name');
const emailEl = getElem('email');
const subjectEl = getElem('subject');
const messageEl = getElem('message');
const formSubmitBtn = getElem('submitBtn');

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function checkElems() {
  if (
    nameEl.value !== '' &&
    emailEl.value !== '' &&
    subjectEl.value !== '' &&
    messageEl.value !== '' &&
    emailRegex.test(emailEl.value)
  ) {
    formSubmitBtn.disabled = false;
  } else {
    formSubmitBtn.disabled = true;
  }
}

nameEl.addEventListener('keyup', checkElems);
emailEl.addEventListener('keyup', checkElems);
subjectEl.addEventListener('keyup', checkElems);
messageEl.addEventListener('keyup', checkElems);
