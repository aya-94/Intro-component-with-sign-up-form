'use strict';

const form = document.getElementById('signup');

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const errorStatus = (inputEl, error, errorMessage, placeholderValue) => {
	error.innerHTML = errorMessage;
	error.style.marginBottom = '10px';
	inputEl.style.border = '2px solid hsl(0, 100%, 74%)';
	inputEl.classList.add('error-icon');
	inputEl.placeholder = placeholderValue;
};

const validStatus = (inputEl, error) => {
	error.innerHTML = ``;
	error.style.marginBottom = '0px';
	inputEl.style.border = '2px solid hsl(246, 25%, 77%)';
	inputEl.classList.remove('error-icon');
};

const checkInvalidFirstName = () => {
	if (firstNameInput.value === '') {
		errorStatus(
			firstNameInput,
			firstNameError,
			'First Name cannot be empty',
			''
		);
	} else {
		validStatus(firstNameInput, firstNameError);
	}
};

const checkInvalidLastName = () => {
	if (lastNameInput.value === '') {
		errorStatus(lastNameInput, lastNameError, 'Last Name cannot be empty', '');
	} else {
		validStatus(lastNameInput, lastNameError);
	}
};

const checkInvalidEmail = () => {
	if (emailInput.value === '') {
		errorStatus(
			emailInput,
			emailError,
			'Looks like this is not an email',
			'email@example/com'
		);
	} else {
		validStatus(emailInput, emailError);
	}
};

const checkInvalidPassword = () => {
	if (passwordInput.value === '') {
		errorStatus(passwordInput, passwordError, 'Password cannot be empty', '');
	} else {
		validStatus(passwordInput, passwordError);
		passwordError.innerHTML = '';
	}
};

form.addEventListener('submit', (e) => {
	event.preventDefault();

	checkInvalidFirstName();
	checkInvalidLastName();
	checkInvalidEmail();
	checkInvalidPassword();
});
