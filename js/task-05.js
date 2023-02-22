const inputName = document.querySelector('#name-input');
const labelName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    labelName.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value; 
}


