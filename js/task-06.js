const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
    const length = inputEl.value.length;
    const validLength = inputEl.getAttribute('data-length');
    if (length === parseInt(validLength)) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}






































