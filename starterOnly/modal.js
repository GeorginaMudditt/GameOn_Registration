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

//DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  var firstNameInput = document.getElementById('first');
  var lastNameInput = document.getElementById('last');
  var emailInput = document.getElementById('email');
  var birthdateInput = document.getElementById('birthdate');
  var quantityInput = document.getElementById('quantity');
  var submitBtn = document.getElementById('submitBtn');

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
    errorMessageDiv.textContent = 'This is a required field';
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
    errorMessageDiv.textContent = 'This is a required field';
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
    errorMessageDiv.textContent = 'This is a required field';
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

function validateBirthdate(input) {
  var errorMessageDiv = input.nextElementSibling && input.nextElementSibling.classList.contains('error-message') 
    ? input.nextElementSibling 
    : document.createElement('div');
  errorMessageDiv.className = 'error-message';
  errorMessageDiv.style.display = 'none'; 
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
    input.parentNode.insertBefore(errorMessageDiv, input.nextSibling);
  }

  const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/([12]\d{3})$/;
  if (input.value.length === 0) {
    errorMessageDiv.textContent = 'This is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  } else if (!birthdateRegex.test(input.value)) {
    errorMessageDiv.textContent = 'Please type a valid birthdate dd/mm/yyyy';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

document.getElementById('birthdate').addEventListener('input', function(e) {
  var input = e.target.value.replace(/\D/g,''); // Remove non-digits
  var day = input.substr(0, 2);
  var month = input.substr(2, 2);
  var year = input.substr(4, 4);

  if (month.length) day += '/';
  if (year.length) month += '/';
  e.target.value = day + month + year;
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
    errorMessageDiv.textContent = 'This is a required field';
    errorMessageDiv.style.display = 'block';
    return false;
  }
  return true;
}

// prevent form submission if any of the above criteria are not met

submitBtn.addEventListener('click', function(event) {
  var firstNameValid = validateFirstName(firstNameInput);
  var lastNameValid = validateLastName(lastNameInput);
  var emailValid = validateEmail(emailInput);
  var birthdateValid = validateBirthdate(birthdateInput);
  var quantityValid = validateQuantity(quantityInput);

  if (!firstNameValid || !lastNameValid || !emailValid || !birthdateValid) {
    event.preventDefault(); // Prevent form submission
  }
});
});

// prevent form submission and display error message if a location is not chosen

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form'); // Adjust the selector as needed
  const radioButtons = document.querySelectorAll('input[type="radio"][name="location"]');
  const errorContainer = document.createElement('div');
  errorContainer.id = 'location-error';
  errorContainer.classList.add('error-message');
  errorContainer.textContent = 'Please select a location';
  
  // Assuming all radio buttons are wrapped in a common parent container
  // Find the parent container of the last radio button
  const radioButtonsContainer = radioButtons[radioButtons.length - 1].parentNode;
  
  // Append the errorContainer to the radio buttons' parent container
  radioButtonsContainer.appendChild(errorContainer);

  form.addEventListener('submit', function(event) {
    const isLocationSelected = Array.from(radioButtons).some(radio => radio.checked);
    
    if (!isLocationSelected) {
      event.preventDefault(); // Stop form submission
      errorContainer.style.display = 'block'; // Show error message
    } else {
      errorContainer.style.display = 'none'; // Hide error message if selection is made
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