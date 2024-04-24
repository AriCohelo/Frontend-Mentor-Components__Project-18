import './main.scss';

let form = document.forms.myForm;
let errorMessage = document.querySelectorAll('.errorMessage');
let firstNameInput = document.forms.myForm[0];
let firstNameInputError = document.forms.myForm[1];
let lastNameInput = document.forms.myForm[2];
let lastNameInputError = document.forms.myForm[3];

// let emailInput = document.forms.myForm[3];
// let passwordInput = document.forms.myForm[4];
let submitButton = document.forms.myForm[6];

console.log(document.forms);
submitButton.addEventListener('click', (e) => {
	if (
		!firstNameInput.value &&
		!lastNameInput.value &&
		!emailInput.value & !passwordInput.value
	)
		return;
	if (!firstNameInput.checkValidity() || !lasttNameInput.checkValidity()) {
		e.preventDefault();
		firstNameInput.classList.toggle('hidden');
		firstNameInputError.classList.toggle('hidden');
		lastNameInput.classList.toggle('hidden');
		lastNameInputError.classList.toggle('hidden');
		errorMessage.forEach((element) => {
			element.classList.toggle('hidden');
		});
	}
});
