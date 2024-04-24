import './main.scss';

let errorMessage = document.querySelectorAll('.errorMessage');
let firstNameInput = document.forms.myForm[0];
let firstNameInputError = document.forms.myForm[1];
let lastNameInput = document.forms.myForm[2];
let lastNameInputError = document.forms.myForm[3];
let emailInput = document.forms.myForm[4];
let emailInputError = document.forms.myForm[5];
let passwordInput = document.forms.myForm[6];
let passwordInputError = document.forms.myForm[7];
let submitButton = document.forms.myForm[8];

console.log(document.forms);

//

// TOGGLING CLASSES CREATES THE PROBLEM THAT IF THE FORM IS NOT FILLED PROPERLY AND PRESS
// THE SUBMIT BUTTON THE ERRORS APPEAR BUT WHEN THE SUBMIT BUTTON IS PRESSED AGAIN, THE
// ERRORS MESSAGES DISSAPEAR EVEN IF THE FORM WAS NOT FILLED PROPERLY

//
submitButton.addEventListener('click', (e) => {
	if (
		!firstNameInput.value &&
		!lastNameInput.value &&
		!emailInput.value & !passwordInput.value
	)
		return;
	if (
		!firstNameInput.checkValidity() ||
		!lastNameInput.checkValidity() ||
		!emailInput.checkValidity() ||
		!passwordInput.checkValidity()
	) {
		e.preventDefault();
		firstNameInput.classList.toggle('hidden');
		firstNameInputError.classList.toggle('hidden');
		firstNameInputError.value = firstNameInput.value;

		lastNameInput.classList.toggle('hidden');
		lastNameInputError.classList.toggle('hidden');
		lastNameInputError.value = lastNameInput.value;

		emailInput.classList.toggle('hidden');
		emailInputError.classList.toggle('hidden');
		emailInputError.value = emailInput.value;

		passwordInput.classList.toggle('hidden');
		passwordInputError.classList.toggle('hidden');

		errorMessage.forEach((element) => {
			element.classList.toggle('hidden');
		});
	}
});
