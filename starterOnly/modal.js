// code already included in project

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// code added by Georgina

//DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  const firstNameInput = document.getElementById('first');
  const lastNameInput = document.getElementById('last');
  const emailInput = document.getElementById('email');
  const birthdateInput = document.getElementById('birthdate');
  const quantityInput = document.getElementById('quantity');
  const submitBtn = document.getElementById('submitBtn');
  const form = document.querySelector('form');

// first name field: cannot be left blank, min 2 characters, no numbers

function validateFirstName(input) {
  var errorMessageDiv = input.nextElementSibling && input.nextElementSibling.classList.contains('error-message') 
    ? input.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
    input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
  }

  if (input.value.length === 0) {
    errorMessageDiv.textContent = 'First Name is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (/\d/.test(input.value)) {
    errorMessageDiv.textContent = 'Please do not include numbers';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (input.value.length === 1) {
    errorMessageDiv.textContent = 'Please type a minimum of 2 characters';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

// last name field: cannot be left blank, min 2 characters, no numbers

function validateLastName(input) {
  var errorMessageDiv = input.nextElementSibling && input.nextElementSibling.classList.contains('error-message') 
    ? input.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
    input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
  }

  if (input.value.length === 0) {
    errorMessageDiv.textContent = 'Last Name is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (/\d/.test(input.value)) {
    errorMessageDiv.textContent = 'Please do not include numbers';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (input.value.length === 1) {
    errorMessageDiv.textContent = 'Please type a minimum of 2 characters';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

// email field: cannot be left blank, must be a valid email address

function validateEmail(input) {
  var errorMessageDiv = input.nextElementSibling && input.nextElementSibling.classList.contains('error-message') 
    ? input.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
    input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.length === 0) {
    errorMessageDiv.textContent = 'Email is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (!emailRegex.test(input.value)) {
    errorMessageDiv.textContent = 'Please type a valid email address';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

// birthdate field: cannot be left blank, must be correct format, user cannot type extra numbers

function validateBirthdate() {
  var birthdateInput = document.getElementById('birthdate');
  var errorMessageDiv = birthdateInput.nextElementSibling && birthdateInput.nextElementSibling.classList.contains('error-message') 
    ? birthdateInput.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!birthdateInput.nextElementSibling || !birthdateInput.nextElementSibling.classList.contains('error-message')) {
    birthdateInput.parentNode.insertBefore(errorMessageDiv, birthdateInput.nextSibling);
  }

  birthdateInput.setAttribute('min', '1900-01-01');
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var maxDate = yesterday.toISOString().split('T')[0]; // Format yesterday's date as YYYY-MM-DD
  birthdateInput.setAttribute('max', maxDate);

  if (birthdateInput.value === '') {
    errorMessageDiv.textContent = 'Birthdate is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (birthdateInput.value < '1900-01-01' || birthdateInput.value > maxDate) {
    errorMessageDiv.textContent = 'Please choose a valid birthdate';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

document.getElementById('birthdate').addEventListener('keydown', function(event) {
  event.preventDefault();
});

// quantity field: cannot be left blank, must be a number

function validateQuantity(input) {
  var errorMessageDiv = input.nextElementSibling && input.nextElementSibling.classList.contains('error-message') 
    ? input.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
    input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
  }

  if (input.value.length === 0) {
    errorMessageDiv.textContent = 'Please choose a number';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

// location field: must select a location

function isLocationSelected() {
  const radioButtons = document.getElementsByName('location');
  return Array.from(radioButtons).some(radio => radio.checked);
}

function getLocationErrorMessageElement() {
  let errorMessage = document.getElementById('location-error-message');
  if (!errorMessage) {
    errorMessage = document.createElement('div');
    errorMessage.id = 'location-error-message';
    errorMessage.style.display = 'none';
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please choose a location';
    const lastRadioButton = document.getElementsByName('location')[document.getElementsByName('location').length - 1];
    lastRadioButton.parentNode.appendChild(errorMessage);
  }
  return errorMessage;
}

submitBtn.addEventListener('click', function(event) {
  const locationSelected = isLocationSelected();
  const locationErrorMessage = getLocationErrorMessageElement();
  
  if (!locationSelected) {
    event.preventDefault();
    locationErrorMessage.style.display = 'block'; 
  } else {
    locationErrorMessage.style.display = 'none'; // Hide error message if location is selected
  }
});

// prevent form submission if any of the above criteria are not met

submitBtn.addEventListener('click', function(event) {
  var firstNameValid = validateFirstName(firstNameInput);
  var lastNameValid = validateLastName(lastNameInput);
  var emailValid = validateEmail(emailInput);
  var birthdateValid = validateBirthdate(birthdateInput);
  var quantityValid = validateQuantity(quantityInput);
  

  if (!firstNameValid || !lastNameValid || !emailValid || !birthdateValid || !quantityValid || !locationSelected) {
    event.preventDefault(); 
    if (!locationSelected) {
      errorContainer.style.display = 'block'; 
  }
}
});
});

// close modal event

document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function() {
    document.querySelector('.bground').style.display = 'none';
  });
});

// add thank you message on successful submission of form 

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.bground').style.display = 'none';

    const thankYouMessage = document.createElement('div');
    thankYouMessage.innerHTML = 'Thank you for completing the registration!<br>A member of our team will contact you by email within 48 hours.';
    thankYouMessage.classList.add('thank-you-message');
    document.body.appendChild(thankYouMessage);

    setTimeout(() => {
      document.body.removeChild(thankYouMessage);
    }, 10000); 
  });
});