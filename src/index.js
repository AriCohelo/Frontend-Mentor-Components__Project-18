import './main.scss';

let form = document.forms.myForm;
let firstNameInput = document.forms.myForm[0];
let lastNameInput = document.forms.myForm[1];
let emailInput = document.forms.myForm[2];
let passwordInput = document.forms.myForm[3];
let submitButton = document.forms.myForm[4];

console.log(form, firstNameInput, lastNameInput, emailInput, passwordInput);
submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(firstNameInput.checkValidity());
});
